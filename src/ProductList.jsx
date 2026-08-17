import React from "react";

function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics", icon: "💻" },
    { id: 2, name: "Smartphone", price: 25000, category: "Electronics", icon: "📱" },
    { id: 3, name: "Headphones", price: 2500, category: "Accessories", icon: "🎧" },
    { id: 4, name: "Keyboard", price: 1500, category: "Accessories", icon: "⌨️" },
  ];

  return (
    <div className="w-full max-w-6xl">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-8 text-center tracking-tight">
        📦 Product List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 border border-slate-700 shadow-xl hover:border-slate-600 transition hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="w-full h-24 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-center justify-center text-4xl mb-4">
                {product.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-100">{product.name}</h2>
              <span className="inline-block mt-2 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-700 text-slate-300">
                {product.category}
              </span>
            </div>
            <div className="mt-4 text-2xl font-extrabold text-blue-400">
              ₹{product.price.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
