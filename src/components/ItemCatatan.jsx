import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import ActiveButton from "./ActiveButton";

function ItemCatatan({note, onDelete, onArchive, onActive}){
    // jika props onActive kosong (artinya parent yang memanggil adalah ListCatatanAktif)
    // maka buat card catatan dengan tombol Archive
    if(onActive===""){
        return (
            <div className="note-item">
                <div className="note-item__content">
                    <h3 className="note-item__title">{note.title}</h3>
                    <p className="note-item__date">{new Date(note.createdAt).toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className="note-item__body">
                        {note.body}
                    </p>
                </div>
                <div className="note-item__action">
                    <DeleteButton id={note.id} onDelete={onDelete} />
                    <ArchiveButton id={note.id} onArchive={onArchive} />                
                </div>
            </div>
        );
    } else{
        // jika props onActive tidak kosong (artinya parent yang memanggil adalah ListCatatanArsip)
        // maka buat card catatan dengan tombol Active, bukan Archive
        return (
            <div className="note-item">
                <div className="note-item__content">
                    <h3 className="note-item__title">{note.title}</h3>
                    <p className="note-item__date">{new Date(note.createdAt).toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className="note-item__body">
                        {note.body}
                    </p>
                </div>
                <div className="note-item__action">
                    <DeleteButton id={note.id} onDelete={onDelete} />
                    <ActiveButton id={note.id} onActive={onActive} />                
                </div>
            </div>
        );
    }
    
}

export default ItemCatatan;