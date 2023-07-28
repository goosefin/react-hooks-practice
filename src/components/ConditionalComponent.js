import { useState } from 'react'
import Counter from './Counter'
import FunctionalCounter from './FunctionalCounter'

export default function ConditionalComponent(){
    const [display,setDisplay] = useState(true)
    // let output

    //   is this true ? what to do if yes : what to do if no
    return display ? (
        <div>
            <h3>This is a conditional component</h3>
        </div>
    ) : (
        <div> 
            <h3>This is ALSO a conditional component</h3>
        </div>
    )
}