import { useState } from "react";

const Counter =() =>{
    const [Counter, setCounter] = useState(0);

    const decrement = () =>{
        setCounter((prev) => prev + 1);
    };
    const increment = () =>{
        if(counter === 0){
            return;
        }
        setCounter((prev) => prev - 1);
    };
    return (
        <div>
        <button onClick={decrement}>
            Plus
        </button>
        <div>{Counter}</div>
        <button onClick={increment}>Minus</button>
        </div>
    )
}

export default Counter