import React from "react";
import { useState } from "react";

function From({addTransaction}){

    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    const Handlesubmit = (e) => {
    e.preventDefault();
    if(text === "" || amount === 0)return;
addTransaction({id: Math.random(), text, amount: +amount})
setText("");
setAmount(0);
    }
    return(
        <>
        <form onSubmit={Handlesubmit} className="flex flex-col gap-1 mt-5 justify-center items-center">
<input type="text" placeholder="Putyour Money Amount" value={text} onChange={(e) => setText(e.target.value)} className="p-2 m-2  border-b-black rounded-2xl border-2"/>
<input type="number" placeholder="Inter Your Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="p-2 m-2  border-b-black rounded-2xl border-2" />

<button className="bg-blue-500 text-white p-2 m-2 rounded-2xl cursor-pointer">Add Transaction</button>
        </form>
        </>
    );
}

export default From;