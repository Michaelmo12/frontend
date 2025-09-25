import { useState } from "react";

export default function NameCard() 
{
    const [Name, setName] = useState("Guest");

    function handleNameChange(e){
        setName("Student");
        e.preventDefault();
    }

    return (
        <div>
           <h1>Name Card Component</h1>
           <p> Name: {Name} </p>
           <button onClick={handleNameChange}>Change Name</button>
        </div>
    )

}