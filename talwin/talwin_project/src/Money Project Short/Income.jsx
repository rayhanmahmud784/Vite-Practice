
function Income ({income, expense}){
    return(
        <>
        <div className="mt-10 flex gap-2 p-6 justify-center items-center">

<div className="text-green-600 font-bold w-full mx-3.5 text-1xl p-2 flex flex-col  justify-between">
    <h3>Income</h3>
    <p className="text-green-600">{income}</p>
</div>

<div className="text-red-700 font-bold text-1xl flex flex-col justify-between ">
    <h3>Expense</h3>
<p className="text-red-700">{expense}</p>
</div>

        </div>
        </>
    )
}

export default Income;