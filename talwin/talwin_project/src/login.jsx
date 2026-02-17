import { useState } from "react";

function Login(){

    const [Name, Email]= useState({
        name:"",
        email:""
    })

    const [Submit, setSubmit]= useState({
        name:"",
        email:""
    }) // Save Input

const HashChange= (e)=>{
const {name, value} = e.target
Email((previous)=>({
    ...previous,
[name]: value
})) // Accept text

}
 const SubmitSecound = (event)=> {
event.preventDefault();
setSubmit(Name)
 } // Button work





    return(
        <div className="bg-gray-200 flex items-center flex-col justify-center h-screen rounded-lg">
           <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-10">
<h1 className="text-center text-2xl font-bold text-gray-800">Login Admin Pannel</h1>
<form>
    <div className="mt-2">
        <label htmlFor="username" className="block text-sm text-gray-700 w-full ">Username:</label>
        <input type="text"  name="name" value={Name.name} onChange={HashChange} placeholder="Put Your Name" className="block mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-400 shadow-sm focus:border-indigo-400 w-full"></input>
    </div>

    <div className="mt-2">
        <label htmlFor="email"  className="block text-sm text-gray-700 w-full mt-4">Email:</label>
        <input type="email" name="email" value={Name.email} onChange={HashChange} placeholder=" Your Email" className="block mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-400 shadow-sm focus:border-indigo-400 w-full"></input>
    </div>

    <div className="mt-2">
        <label html="password" className="block text-sm text-gray-700 w-full mt-4">Password:</label>
        <input type="password" placeholder="Your Password" className="block mt-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-indigo-500 shadow-sm focus:border-indigo-400 w-full"></input>
    </div>

    <button onClick={SubmitSecound} type="submit"className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">Login</button>
</form>

<div className="mt-6">
   <h2 className="font-bold text-1xl text-center">Submit Info</h2>
   <p className="text-gray-600 mb-2 mt-2">User Name:{Submit.name}</p>
   <p className="text-gray-600">User Email: {Submit.email}</p>
</div>
           </div>
        </div>
    )
}

export default Login;