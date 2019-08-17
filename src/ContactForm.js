import React, { Component} from 'react'

export default class Contact extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit method in ContactForm ran");
        let name = e.target.nameInput.value;
        let number = e.target.numberInput.value;
        this.props.onAddContact(name, number)
        window.location.reload();
    }

    render(){
        return(
            <div>
                <br/>
                <form onSubmit={this.handleSubmit}>

                    Contact Name: <input name="nameInput"
                    type="text"></input>
                    <br/>
                    Contact Number: <input name="numberInput"
                    type="text"></input>
                    <br/>

                    <button type="Submit">Add Contact</button>

                </form>
                <br/>
            </div>
        )
    }

}