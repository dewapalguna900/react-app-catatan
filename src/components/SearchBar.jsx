import React from "react";

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            keyword: '',
        }

        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event){
        const keyword = event.target.value;

        this.setState(() => {
            this.props.findKeyword(keyword);

            return {
                keyword
            }
        });
    }

    render(){
        return (
           <input type="text" id="searchbar" placeholder="Cari Catatan ..." value={this.state.keyword} onChange={this.onSearchChange} />
        )
    }
}

export default SearchBar;