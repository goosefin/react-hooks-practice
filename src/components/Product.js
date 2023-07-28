export default function Product(){
    //const products = ['laptop', 'phone','modal','router']
    // const products = [
    //     {id:1,name:'Laptop', price:500},
    //     {id:2,name:'Phone', price:900},
    //     {id:3,name:'Modal', price:400},
    //     {id:4,name:'Router', price:200},
    // ]
    const products = ['apples','strawberrys','bananas']
    //this method separated the rendering from the logic
    const productList = products.map((product,index)=>(<h3 key={index}>{product}</h3>))
    return <div>{productList}</div>
}

//logic within the render
// export default function Product(){
//     const products = ['laptop', 'phone','modal','router']
//     return (
//     // <div>   
//     //     {products.map((product)=>(
//     //         <h3>{product}</h3>
//     //     ))}
//     // </div>
//     )
// }