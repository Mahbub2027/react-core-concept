import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleClick = () =>{
        const newCount = count + 1;
        setCount(newCount);
        //console.log(newCount);
    }
    const reduceClick = () => {
        const newReduce = count -1;
        setCount(newReduce);
    }

    return(

        <div style={{border: '5px solid purple'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>Add</button>
            <button onClick={reduceClick}>Reduce</button>
        </div>
    )
}