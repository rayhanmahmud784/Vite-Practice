import { useState } from "react";

const Dom = ()=> {
    const [setc, setcokkies] = useState(0)

const CallBack = ()=>{
setcokkies((c) => c + 1)
};

 return (
    <>
      <div>
        Count: {setc}
        <button onClick={CallBack}>+</button>
      </div>
    </>
  );
};


export default Dom;