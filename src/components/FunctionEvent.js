function FunctionEvent(){
    function handleClick(){
        console.log('clicked')
    }
    return(
        <div>
            Functional Component
            <button onClick={handleClick}>Click Here</button>
        </div>
    )
}

export default FunctionEvent