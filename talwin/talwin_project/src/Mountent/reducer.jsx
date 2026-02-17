import React, { useReducer } from 'react';

// 1. Reducer function (Logic layer)
function Rayhan(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            throw new Error("Unknown action type");
    }
}

function CounterComponent() {
    // 2. The first argument MUST match the function name above (counterReducer)
    const [state, dispatch] = useReducer(Rayhan, { count: 0 });

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" });
    };

    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" });
    };

    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={handleIncrement}>Increase</button>
            <button onClick={handleDecrement}>Decrease</button>
        </>
    );
}

export default CounterComponent;