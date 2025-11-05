import React from 'react';

function Weather() {
  const isRaining = true;

  let message;
  if (isRaining) {
    message = 'Stay home';
  } else {
    message = 'Go outside';
  }

  return (
    <div className="weather">
      <h2>Weather</h2>
      <p>Using if statement: {message}</p>
      <p>Using ternary: {isRaining ? 'Stay home' : 'Go outside'}</p>
    </div>
  );
}

export default Weather;
