

export function Money ({balance}){
    return(
        <div className="mt-10 ">
            <h1 className="text-2xl font-bold align-center text-center justify-center">Rayhan Bank 2026</h1>
            <p className="text-1xl text-center mt-4">Your Balance Rayhan Bank</p>
            <h2 className="text-3xl font-bold text-center mt-4 text-red-600">${balance}</h2>
        </div>
    )
}

