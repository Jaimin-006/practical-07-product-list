import React from "react";

function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics", icon: "💻" },
    { id: 2, name: "Smartphone", price: 25000, category: "Electronics", icon: "📱" },
    { id: 3, name: "Headphones", price: 2500, category: "Accessories", icon: "🎧" },
    { id: 4, name: "Keyboard", price: 1500, category: "Accessories", icon: "⌨️" },
  ];

  return (
    <div className="container">
      <h1 className="header-title">🛒 Product Catalog</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-icon-box">{product.icon}</div>
            <h2 className="product-title">{product.name}</h2>
            <span className="category-tag">{product.category}</span>
            <div className="price-tag">₹{product.price.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
