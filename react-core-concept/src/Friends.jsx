import { useEffect, useState } from "react"
import Friend from "./Friend";
import './box.css';

export default function Friends(){
    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])

    return (
        <div className="box">
            <h3>Frends: {friends.length}</h3>
            {
                friends.map(frnd => <Friend friend={frnd}></Friend>)
            }
        </div>
    )
}