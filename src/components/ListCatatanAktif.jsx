import React from "react";
import ItemCatatan from "./ItemCatatan";

function ListCatatanAktif({notes, onDelete, onArchive}){
    // jika ada satu saja data dengan atribut archived=false (adalah bukan arsip), tampilkan template card catatan
    if(notes.find((note) => !note.archived)){
        return (
            <>
                <h2>Catatan Aktif</h2>
                <div className="notes-list">
                    {
                        notes
                        .filter(note => !note.archived)
                        .map((note) => (
                            <ItemCatatan note={note} onDelete={onDelete} onArchive={onArchive} onActive="" key={note.id}/>
                        ))
                    }
                </div>
            </>
        );
    } else{
        // jika tidak ada satupun data dengan atribut archived=false, tampilkan text saja
        return (
            <>
                <h2>Catatan Arsip</h2>
                <p className="notes-list__empty-message">Tidak ada catatan.</p>
            </>
        );
    }
    
}

export default ListCatatanAktif;