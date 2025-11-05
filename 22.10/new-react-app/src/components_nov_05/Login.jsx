import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

function Login() {
    const { username, setUsername } = useContext(UserContext);

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
            <h2>התחברות</h2>
            <label>
                הזן את שמך:
                <input
                    type="text"
                    value={username}
                    onChange={handleChange}
                    placeholder="שם משתמש"
                    style={{ marginRight: '10px', padding: '5px' }}
                />
            </label>
        </div>
    );
}

export default Login;
