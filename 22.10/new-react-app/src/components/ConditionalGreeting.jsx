import React from 'react';

function ConditionalGreeting() {
  const isMorning = true;
  let greeting = isMorning ? 'Good morning' : 'Good evening';


  return (
    <div className="conditional-greeting">
      <h2>Conditional Greeting</h2>
      <p>Using if statement: {greeting}</p>
      <p>Using ternary: {isMorning ? 'Good morning' : 'Good evening'}</p>
    </div>
  );
}

export default ConditionalGreeting;
