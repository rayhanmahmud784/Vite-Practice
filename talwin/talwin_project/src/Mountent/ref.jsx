import { useRef } from "react";

const Loll = ()=>{
const Inputref = useRef(null);


const Showvalow = ()=>{
alert(Inputref.current.value)
}
return(

    <>
    <input type="text" ref={Inputref}  placeholder="put some thisng" className="border-amber-50" />
    <button onClick={Showvalow} className="bg-amber-300">Click Here</button>
    </>
)

};

export default Loll;