import {Component} from "react";

// Accessing props for class components is similar to that of functional components BUT we have to use the key word "this"

class Message extends Component{
    render(){
        return <h1>Message: {this.props.messageContent}</h1>
    }
}

export default Message