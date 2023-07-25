// We include the word props within the parameters when we want to pass down props form the parent component to the child component.
//Props are stored as objects in react. Therefore we can access props using dot notation like props.name, props,age, etc.
// Parent comonents can also pass down children (accessed at props.children). These are created by using opening and closing tags for the component when it it being called.
// For example :
    // <ChildComponent>
    //     <h1>This is accessed by calling {props.children} within ChildComponent</h1>
    // </ChildComponent>

//The code below destructures props so we can access them without having to call them using dot notation
// const {name, lastName} = props
    
function Profile(props){
    // console.log(props)
    //the code below destructures props so we can access them without having to call them using dot notation
    const {name, lastName} = props
    return (<h1>Name:{name} {lastName}</h1>)
}

export default Profile