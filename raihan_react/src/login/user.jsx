function Mylist(){

    const Myfun = [
        {id:1,
            
            name:"Raihan", 
        profrssion:"Web Developer"},
        {id:2,

             name:"Somrat",
             profrssion:" Designer"},

        {id:3, 
            
            name:"Sultan",
             profrssion:"Python Developer"}

    
    ]
    return(
        <>
{
    Myfun.map((items)=>(
        <li key = {items.id}>
            {items.name},
            {items.profrssion}
        </li>
    ))
}

<button className="btn btn-secondary">Click me</button>
        </>
    )
}

export default Mylist;