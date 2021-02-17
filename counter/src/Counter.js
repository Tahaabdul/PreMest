import React, { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);

    function increment () {
        return setCount( count + 1);
    }

    function decrement () {
        return setCount(count - 1);
    }


    return (
        <>
        <div>
        <button onClick={increment}>
            Increment
        </button>
        </div>

        {count}


        <div>
        <button onClick={decrement}>   
            Decrement 
        </button> 
        </div>
        </>
    );
}



export default Counter;