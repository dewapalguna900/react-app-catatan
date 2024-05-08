import React from "react";

function ActiveButton({id, onActive}){
    return (
        <button className="note-item__active-button" onClick={() => {onActive(id)}}>Aktifkan</button>
    );
}

export default ActiveButton;