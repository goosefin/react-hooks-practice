import { useState } from 'react';

function FunctionalCounter(){
    // To hold state you pass in two values to the array: the variable name and a method name to update the state value
    // The other side of this equation calls setState and the param is the value at which you want to initialize that variable
    const [counter, setCounter] = useState(0)

    const increment = () =>{
        setCounter(counter + 1)
    }
    return(
        <>
        <h1>Functional Counter Value: {counter}</h1>
        <button onClick={increment}>Click</button>
        </>
    )
}

export default FunctionalCounter