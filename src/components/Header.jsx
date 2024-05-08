import React from "react";
import SearchBar from "./SearchBar";

function Header({findKeyword}){
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <SearchBar findKeyword={findKeyword} />
        </div>
    )
}

export default Header;