import React, { createContext, useState } from "react";

// יצירת הקונטקסט
export const UserContext = createContext();

// יצירת ה-Provider שעוטף את כל האפליקציה
export function UserProvider({ children }) {
    const [username, setUsername] = useState("");

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
}
