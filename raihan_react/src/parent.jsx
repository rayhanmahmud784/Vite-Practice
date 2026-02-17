import Child from "./chield.jsx";

function Parent() {
    const myName = ()=> {
        alert("My name is Raihan");
    }
    return (
        
        <div>
            <h3>Parent Component</h3>
            <Child Myfun={myName}/>
        </div>
    );
}

export default Parent;