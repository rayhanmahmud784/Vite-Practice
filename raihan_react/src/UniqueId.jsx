function UniqueId (){
       const Userinfo = [ { 
        id: 1,
        Name: "Raihan",
        age: 22,
        email: "raihanmahmud784@gmail.com"


       },
       {
        id: 2,
        Name: "Somrat",
        age: 23,
        email: "somrat@gmail.com"
       },

       {    
        id: 3,
        Name: "Sultan",
        age: 24,
        email: "sultan@gamil.com"
        
       }

        ]
    return(
        <>
        <h1>Unique Information</h1>
           <div>
       {Userinfo.map((itemss) => ( // <--- Use parentheses
  <ul key={itemss.id}>
    <li>{itemss.id}</li>
    <li>{itemss.Name}</li>
    <li>{itemss.age}</li>
    <li>{itemss.email}</li>
  </ul>



))} 
         </div>

         <button className="btn btn-primary">Click me</button>
        </>

    )
    
}

export default UniqueId;
