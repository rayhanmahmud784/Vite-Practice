function Logout({Islogin}){
//    {
//     if(Islogin){
//         return (<h1>Welcome to Logout Page</h1>)
//     }
//     else{
//     return <h1>Welcome to Login Page</h1>
//    }
//    }
return(
    <>
   
{
    Islogin ? <h1>Welcome to Logout Page</h1> : <h1>Welcome to Login Page</h1> // turnary operator
}

</>
)
}
export default Logout;