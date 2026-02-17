import { useState } from "react";  
import "./App.css" 
function Cssl(){

    const [Active, Inactive] = useState(true)

    const Lctive = () => {
        Inactive(!Active)
    }
    return(
        <>
        <button className={Active ? "User_input" : "User_inputIn"} onClick={Lctive}>
            {Active ? "Active" : "Inactive"}
        </button>
        </>
    )
}

export default Cssl;