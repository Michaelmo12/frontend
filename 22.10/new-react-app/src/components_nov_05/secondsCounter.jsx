import React, { useEffect, useState } from "react";

function SecondsCounter() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>עברו {seconds} שניות</h1>
        </div>
    );
}

export default SecondsCounter;
