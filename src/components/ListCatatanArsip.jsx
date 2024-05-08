import React from "react";
import ItemCatatan from "./ItemCatatan";

function ListCatatanArsip({notes, onDelete, onActive}){
    // jika ada satu saja data dengan atribut archived=true (adalah arsip), tampilkan template card catatan
    if(notes.find((note) => note.archived)){
        return (
            <>
                <h2>Catatan Arsip</h2>
                <div className="notes-list">
                    {
                        notes
                        .filter(note => note.archived)
                        .map((note) => (
                            <ItemCatatan note={note} onDelete={onDelete} onArchive="" onActive={onActive} key={note.id}/>
                        ))
                    }
                </div>
            </>
        );
    } else{
        // jika tidak ada satupun data dengan atribut archived=true, tampilkan text saja
        return (
            <>
                <h2>Catatan Arsip</h2>
                <p className="notes-list__empty-message">Tidak ada catatan.</p>
            </>
        );
    }
}

export default ListCatatanArsip;