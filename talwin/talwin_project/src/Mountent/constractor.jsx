
import React from "react";
class Rayhan extends React.Component{
    constructor(props){
super(props);
this.state = {
    farouratecolour : "hacker One"
}
    }

    static getDerivedStateFromProps(props, state){
        return{
            farouratecolour: props.Don
        }
    }

render(){
    return (
  
        <>
        <h1>this is my colour {this.state.farouratecolour}</h1>
        </>
    )
}

}

export default Rayhan;