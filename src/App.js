import React, { Component } from 'react';
import './App.css';
import ContactForm from "./ContactForm"
import ContactList from "./ContactList"

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      contacts: [
       /*  {name: "Joe", number: "344-5678"},
        {name: "Sally", number: "344-5678"},
        {name: "Sarah", number: "344-5678"},
        {name: "Ted", number: "234-9876"} */
      ]
    }
  }

  addContact = (name, number) => {
    console.log("addContact method ran in App component");
    let currentArray = this.state.contacts;
    currentArray.push({name: name, number: number})
    this.setState({contacts: currentArray})
  }

  render(){
    return (
      <div className="App">
        <h1>Address Book</h1>
        <ContactList contacts={this.state.contacts}/>
        <ContactForm onAddContact={this.addContact}/>
      </div>
    );
  }
}

export default App;
