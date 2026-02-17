
import { useState } from "react";
import Logout from "./logout";

function Login(){
    const [Islogin, setIsLogin] = useState(false);
    return(
        <>
        <button onClick={()=>{setIsLogin(!Islogin)}}>{Islogin ? "Logout" : "Login"}</button>

        <Logout Islogin={Islogin} />
        </>

    )
}

export default Login;
