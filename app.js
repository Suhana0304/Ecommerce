import React from 'react';
import './App.css'; // Importing external CSS for styling

function App() {
  // Sample grocery products data with actual image URLs from the browser
  const products = [
    {
      id: 1,
      name: 'Apples (1kg)',
      price: '$3.50',
      image: 'https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Image URL for Apples
    },
    {
      id: 2,
      name: 'Bananas (1kg)',
      price: '$2.20',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hc3xlbnwwfHwwfHx8MA%3D%3D', // Image URL for Bananas
    },
    {
      id: 3,
      name: 'Carrots (500g)',
      price: '$1.80',
      image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?cs=srgb&dl=pexels-mali-143133.jpg&fm=jpg', // Image URL for Carrots
    },
    {
      id: 4,
      name: 'Broccoli (500g)',
      price: '$2.50',
      image: 'https://t4.ftcdn.net/jpg/01/38/59/65/360_F_138596528_dG7J8xrEXROzGkE0PCgKjDWyclYUWfzz.jpg', // Image URL for Broccoli
    },
    {
      id: 5,
      name: 'Tomatoes (1kg)',
      price: '$2.80',
      image: 'https://plus.unsplash.com/premium_photo-1726138647192-5275bef08970?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D', // Image URL for Tomatoes
    },
    {
      id: 6,
      name: 'Onions (1kg)',
      price: '$1.50',
      image: 'https://t4.ftcdn.net/jpg/10/62/98/15/360_F_1062981555_ZeS0zYtJS1OygaiMDgP16CXIzdvtqZ8Q.jpg', // Image URL for Onions
    },
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1>Grocery Store</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;