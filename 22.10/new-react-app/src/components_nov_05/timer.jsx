import React, { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(10);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (time === 0) {
            setIsFinished(true);
            return;
        }
        
        const timer = setInterval(() => {
            setTime(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    const handleReset = () => {
        setTime(10);
        setIsFinished(false);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{time}</h1>
            {isFinished && <h2 style={{ color: 'red' }}>הזמן נגמר!</h2>}
            <button onClick={handleReset} style={{ marginTop: '20px', padding: '10px 20px' }}>
                התחל מחדש
            </button>
        </div>
    );
}

export default Timer;