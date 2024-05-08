import React from "react";

class FormInputNote extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
            archived: false,
            createdAt: ''
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
    }

    onTitleChange(event){
        let title = event.target.value;
        const char_length = title.length;

        // jika panjang karakter lebih dari 50, kurangi karakter yang di-input sehingga total jadi 50 karakter
        if(char_length > 50){
            const length_gap = 50 - char_length;
            title = title.slice(0, length_gap);
            alert("Sudah 50 karakter, tidak boleh lebih!");
        }

        this.setState(() => {
            return {
                title: title
            }
        });
    }

    onBodyChange(event){
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onSubmitClick(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render(){
        return(
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form>
                    <p className="note-input__title__char-limit">Sisa karakter: {50-this.state.title.length}</p>
                    <input type="text" id="title" placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChange} />
                    <textarea placeholder="Tuliskan catatanmu di sini ..." id="body" cols="30" rows="10" value={this.state.body} onChange={this.onBodyChange}></textarea>
                    <button id="submit" onClick={this.onSubmitClick}>Buat</button>
                </form>
            </div>
        );
    }
}

export default FormInputNote;