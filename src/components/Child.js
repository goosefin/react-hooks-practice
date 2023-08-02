import React from "react"

function Child({childCount}){
    console.log('Child component is being rerendered')
    return <div>The child count is {childCount}</div>
}

export default React.memo(Child)