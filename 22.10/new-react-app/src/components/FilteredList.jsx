import React from 'react';

function FilteredList() {
  const products = [
    { name: 'Laptop', inStock: true },
    { name: 'Mouse', inStock: false },
    { name: 'Keyboard', inStock: true },
    { name: 'Monitor', inStock: true },
    { name: 'Webcam', inStock: false },
    { name: 'Headphones', inStock: true }
  ];

  
  return (
    <div className="filtered-list">
      <h2>Products In Stock</h2>
      <ul>
        {products
          .filter(product => product.inStock)
          .map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default FilteredList;
