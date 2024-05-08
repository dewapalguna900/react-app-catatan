import React from "react";
import Header from "./Header";
import FormInputNote from "./FormInputNote";
import ListCatatanAktif from "./ListCatatanAktif";
import ListCatatanArsip from "./ListCatatanArsip";
import { getInitialData } from "../utils/index.js";

class CatatanApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData(),
            keyword: ''
        }

        this.onAddNote = this.onAddNote.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onArchiveClick = this.onArchiveClick.bind(this);
        this.onActiveClick = this.onActiveClick.bind(this);
        this.onFindKeyword = this.onFindKeyword.bind(this);
    }

    // event handler untuk tambah catatan baru
    onAddNote({title, body, archived}){
        this.setState((previousState) => {
            return {
                notes: [
                    ...previousState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived,
                        createdAt: new Date().toISOString()
                    }
                ]
            }
        })
    }

    // event handler untuk hapus catatan berdasarkan id dari tombol yang di-klik
    onDeleteClick(id){
        const updatedNotes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes: updatedNotes});
    }

    // event handler untuk pindah status catatan ke arsip
    onArchiveClick(id){
        const updatedNotes = this.state.notes.map(note => {
            if(note.id===id){
                return {
                    ...note,
                    archived: true
                };
            } else{
                return note;
            }
        });
        
        this.setState({notes: updatedNotes});
    }
    
    // event handler untuk pindah status catatan ke aktif kembali
    onActiveClick(id){
        const updatedNotes = this.state.notes.map(note => {
            if(note.id===id){
                return {
                    ...note,
                    archived: false
                };
            } else{
                return note;
            }
        });
        
        this.setState({notes: updatedNotes});
    }

    // event handler untuk inisialisasi state keyword pada parent component
    onFindKeyword(keyword){
        this.setState({keyword});
    }

    render(){
        let searchedNotes = '';
        
        // memastikan hanya saat keyword ada baru dilakukan filter catatan
        if(this.state.keyword !== ""){
            searchedNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()));
        }
        
        return (
            <>
                <Header findKeyword={this.onFindKeyword} />

                <div className="note-app__body">
                    <FormInputNote addNote={this.onAddNote} />
                    <ListCatatanAktif notes={this.state.keyword === "" ? this.state.notes : searchedNotes} onDelete={this.onDeleteClick} onArchive={this.onArchiveClick} />

                    <ListCatatanArsip notes={this.state.keyword === "" ? this.state.notes : searchedNotes} onDelete={this.onDeleteClick} onActive={this.onActiveClick} />
                </div>
            </>
        )
    }
}

export default CatatanApp;