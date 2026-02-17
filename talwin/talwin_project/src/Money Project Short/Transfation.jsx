
function Moneyhunt ({transactions}){
    return(
        <>
        <ul>
            {
                transactions.map((Trans)=>(
<li className={Trans.amount > 0 ? "text-green-500 bg-green-200" : "text-red-500 bg-red-300"}>
    {
        Trans.text
    }
    <span className="float-right">{Trans.amount}</span>
</li>
                ))
            }
        </ul>
        </>
    )
}

export default Moneyhunt;