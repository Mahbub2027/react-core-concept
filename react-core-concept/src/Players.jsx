import { useState } from "react"

export default function Players(){
    const [player, setPlayer] = useState(11);

    const handleAdd = () =>{
        const newPlayer = player + 1;
        setPlayer(newPlayer);
    }
    const handleRemove= () =>{
        setPlayer(player -1);
    }
    const cssStyle = {
        border: '5px solid red',
        margin: '10px',
        padding: '10px',
        borderRadius: '15px'
    }
    return(
        <div style={cssStyle}>
            <h3>Players: {player}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}