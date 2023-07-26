import {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Counter is {count}</h2>
            <button onClick={()=>{setCount(count => count+1)}}>Increment</button>
            <button onClick={() => {setCount(count => count-1)}}>Decrement</button>
            <button onClick={() => {setCount(0)}}>Reset</button>
        </>
    )
}