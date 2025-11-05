import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

function Header() {
    const { username } = useContext(UserContext);

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            textAlign: 'center'
        }}>
            <h1>
                {username ? `שלום, ${username}` : "שלום, אורח"}
            </h1>
        </div>
    );
}

export default Header;
