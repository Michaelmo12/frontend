import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

function Profile() {
    const { username } = useContext(UserContext);

    return (
        <div style={{
            padding: '20px',
            border: '2px solid #2196F3',
            margin: '20px',
            borderRadius: '8px'
        }}>
            <h2>פרופיל משתמש</h2>
            <p style={{ fontSize: '18px' }}>
                {username ? `שם משתמש: ${username}` : "שם משתמש: לא הוזן"}
            </p>
        </div>
    );
}

export default Profile;
