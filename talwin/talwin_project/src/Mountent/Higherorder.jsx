
function Higherorder (){
    const Mycont =(NComponent) =>{
        return (props)=>{
            return(
                <>
                <NComponent {...props}/>
                </>
               
       
            )
        }
    }

const Normalcomponent =()=>{
return (
    <h1>This is Normal Component</h1>
    
)
}

const LastWichNcp = Mycont (Normalcomponent)
return(
    <div>
        < LastWichNcp />
    </div>
)


}

export default Higherorder;