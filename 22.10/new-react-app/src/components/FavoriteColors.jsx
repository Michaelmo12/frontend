import React from 'react';

function FavoriteColors() {
  const colors = ['red', 'blue', 'green', 'yellow', 'blue', 'purple'];

  return (
    <div className="favorite-colors">
      <h2>Favorite Colors</h2>
      <div>
        {colors.map((color, index) => (
          <button key={index} style={{ backgroundColor: color, margin: '5px', padding: '10px' }}>
            {color} {color === 'blue' && 'Cool Color'}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FavoriteColors;
