import { Component } from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state={
            counter: 0,
        }
        // this.increment = this.increment.bind(this)
    }

    //Arrow functions remove the need for binders within the constructor because it has access to the key word this
    increment = () =>{
        //console.log(this)
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render(){
        return(
            <>
                <h1>Counter value is: {this.state.counter}</h1>
                {/* We use the syntax below in order to avoid having to bind the key word this to that specific method within the constructor. */}
                {/* <button onClick={()=> this.increment()}>Click</button> */}
                <button onClick={this.increment}>Click</button>
            </>
        )
    }
}

export default Counter