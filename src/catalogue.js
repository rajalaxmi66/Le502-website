import React, { useState } from "react";
import "./catalogue.css";


const catalogue = () => {
  const [cartItems, setCartItems] = useState([]);

  // Example product data (expanded to 8 products)
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      imageUrl: 'https://i.pinimg.com/originals/f1/0d/a1/f10da197c729efd5c82391b52346bc2e.jpg',
      priceUSD: 19.99
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      imageUrl: 'https://i.pinimg.com/originals/c3/3d/cb/c33dcb300689a8e31f4f9270518b8853.jpg',
      priceUSD: 29.99
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3',
      imageUrl: 'https://ae01.alicdn.com/kf/HTB1i7CEaTHuK1RkSndVq6xVwpXa0/Business-Men-watches-top-brand-luxury-man-cool-watch-fashion-wristwatches-men-stainless-steel-big-large.jpg',
      priceUSD: 39.99
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 4',
      imageUrl: 'https://th.bing.com/th/id/OIP.zmosxDi0WN8tqrLOU3YoswAAAA?rs=1&pid=ImgDetMain',
      priceUSD: 49.99
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description of Product 5',
      imageUrl: 'https://th.bing.com/th/id/R.976f7f932df5c725b033cab13805dbc1?rik=VVuIVQ6tKgUdbA&riu=http%3a%2f%2fwww.watcheast.com%2fwp-content%2fuploads%2f2014%2f09%2farmani-mens-watches.jpg&ehk=HHlby8w5WNDO7vdqpR63FDke55MqGFqK9ANi8ObmSEI%3d&risl=&pid=ImgRaw&r=0',
      priceUSD: 59.99
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description of Product 6',
      imageUrl: 'https://ae01.alicdn.com/kf/HTB1rEQiKVXXXXaAaXXXq6xXFXXXd/2018-Fashion-Top-Mens-Watch-Modern-Watch-Luxury-Rose-Gold-Mesh-Band-Quartz-Watches-Ultra-Thin.jpg',
      priceUSD: 69.99
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Description of Product 7',
      imageUrl: 'https://th.bing.com/th/id/OIP.aG34jB0yRS2Ir2xvxVTi1QHaE8?rs=1&pid=ImgDetMain',
      priceUSD: 79.99
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Description of Product 8',
      imageUrl: 'https://th.bing.com/th/id/OIP.E2_wwOqF0p9-Z9FRa3Y_HAHaFj?rs=1&pid=ImgDetMain',
      priceUSD: 89.99
    }
  ];

  // Conversion rate from USD to INR (Indian Rupee)
  const exchangeRate = 75.0; // Replace with the current exchange rate if needed

  // Function to convert USD to INR and format the price
  const convertCurrency = (priceUSD) => {
    const priceINR = priceUSD * exchangeRate;
    return priceINR.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
  };

  // Function to handle adding a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', padding: '20px' }}>
      <h1 style={{ gridColumn: '1 / -1' }}>Catalogue</h1>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '20px' }}>
          <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {convertCurrency(product.priceUSD)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default catalogue;



