import React, { Component} from 'react'

export default class Contact extends Component{

    render(){

        return(
            <div>
                {this.props.name} | {this.props.number}
            </div>
        )

        
    }
}