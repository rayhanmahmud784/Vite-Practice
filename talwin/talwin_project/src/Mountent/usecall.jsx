
import { useState, useCallback } from "react"

function UseCa (){
    const [Useeffect, Useupdate] = useState(0);

const Increment = useCallback(()=>{
    Useupdate ((previous)=> previous + 1)
},[])

const Decrement = useCallback(()=>{
    Useupdate ((Decre)=>  Decre - 1 )
},[])

    return(
<>
<p>count: {Useeffect}</p>
<button onClick={Increment} className="bg-amber-500 rounded-2xl gap-1">Increment</button>
<button onClick={Decrement} className="bg-amber-800 rounded-2xl gap-1">Decrement</button>
</>
    )

}



    export default UseCa;