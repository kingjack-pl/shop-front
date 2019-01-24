import React from "react";


class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
     this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const adminCss = {
            "margin": "0 auto", 
            "width" :"250px"  
        }
        const btnCss = {
            "padding" : '10px',
            "background-color" : "green"
        }
        return (
            <div className="adminPanel col-md-4" style={adminCss}>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="Book name" id="bookNameInput" name="name" className="form-control"  value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Book author" id="bookAuthorInput" name="bookAuthor" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Book description" id="bookDescriptionText" name="bookDescription" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Book image" id="bookImageText" name="image" className="form-control" />
                </div>
                <button style={btnCss} id="button" type="submit" className="btn btn=primary">Add</button>
            </form>
        </div>
        )
    };
}

export default AddBook