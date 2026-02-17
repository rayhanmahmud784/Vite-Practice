import { useState, useEffect } from "react";

function Datfatch(){

    const [Data, Setdata] = useState([])
    const [Error, Don] = useState(null)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=> response.json())
        .then((Data)=>Setdata(Data))
        .catch((error)=>Don(error))
    },[])

    if(Error){
        return<div>{Error.massage}</div>
    }

return(
<>
<h1>My Api Resent Post</h1>
<ul>
    {Data.map((post)=>(
        <li key={post.id}>
{post.id}

        </li>
    ))}
</ul>
</>
)
}

export default Datfatch;