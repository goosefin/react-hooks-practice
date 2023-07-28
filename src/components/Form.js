import { Component } from 'react'

class Form extends Component{
    state = {
        firstName:"",
        lastName:""
    }
    handleChange = (e) =>{
        this.setState({
            firstName:e.target.value
        })
        console.log(this.state.firstName)
    }

    handleLastNameChange = (e) =>{
        this.setState({
            lastName: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(({
            fname:this.state.firstName,
            lname:this.state.lastName
        }))
    }
    render(){
        return (
        <div> Form
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChange} 
                    type="text" 
                    value={this.state.firstName}
                ></input>
                <input 
                    type='text' 
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}>
                </input>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

export default Form