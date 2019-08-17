import React, {Component} from 'react'
import Contact from "./Contact"

export default class ContactList extends Component{

    render(){
        return(
            <div>
                   {
                       this.props.contacts.map((contact, index) => {
                           return(
                            <Contact name={contact.name} number={contact.number} key={index}/>
                            )
                       })
                   }
            </div>
        )
    }
}

ContactList.defaultProps = {contacts: []}