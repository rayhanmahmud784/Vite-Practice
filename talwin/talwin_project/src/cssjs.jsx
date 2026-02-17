import { useState } from "react";   

function UsrState(){

    const [color, setColor] = useState(true);

    const changeColor = {
        backgroundColor: color ? "green" : "blue",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    }

    const handleClick = () => {
        setColor(!color);
    }

    return(
<>
<h1>Use State, When People Click This Button Its Colour Changes</h1>
<button onClick={handleClick} style={changeColor}>
{color ? "Active" : "Inactive"}
</button>



</>

    )
};

export default UsrState;