import React from "react";

function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 25000, category: "Electronics" },
    { id: 3, name: "Headphones", price: 2500, category: "Accessories" },
    { id: 4, name: "Keyboard", price: 1500, category: "Accessories" },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Product List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition"
          >
            <div>
              <div className="w-full h-20 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400 text-2xl font-bold">
                📦
              </div>
              <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
              <p className="text-xs font-medium text-gray-500 mt-1">{product.category}</p>
            </div>
            <p className="text-xl font-extrabold text-blue-600 mt-4">
              ₹{product.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
