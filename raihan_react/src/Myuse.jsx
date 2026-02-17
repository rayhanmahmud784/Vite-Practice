
import { useState } from "react"
export function Somrat (){

    const [text, setText] = useState(0)

    // const ThisLol = ()=>{
    //     setText(text + 1)

     return(
        <>
        <div>Aita Use State Ar data poriborton kore</div>
        <p>Current value: {text}</p>
        <button onClick={()=> setText(text + 1)}>Click Here</button>
        </>
    )
}
   
