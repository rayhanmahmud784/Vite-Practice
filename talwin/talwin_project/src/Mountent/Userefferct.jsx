import { useState, useEffect } from "react"


function Usereffect (){

    const [Useeffect, Useupdate] = useState(0);

    useEffect(()=>{
const Timer = setInterval(()=>{
    Useupdate((pre)=> pre + 1
    )
}, 1000)

return(()=>{
    clearInterval(Timer)
})
    },[]) // useeffer syntext

    return(
        <div>
            Timer is {Useeffect}
        </div>
    )
    
}

export default Usereffect;