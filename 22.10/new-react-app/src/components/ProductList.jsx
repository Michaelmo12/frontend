import React from 'react';

function ProductList() {
  const products = [
    { name: 'Laptop', price: 899 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 },
    { name: 'Monitor', price: 320 },
    { name: 'USB Cable', price: 12 },
    { name: 'Headphones', price: 45 }
  ];

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price} - {product.price > 50 ? 'Expensive' : 'Cheap'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
