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
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-amber-800 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-wider">
          Store Catalog
        </span>
        <h1 className="text-3xl font-extrabold text-stone-900 mt-2">
          Product List
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div>
              <div className="w-full h-24 bg-amber-50 rounded-xl mb-4 flex items-center justify-center text-amber-800 text-3xl font-bold border border-amber-100">
                📦
              </div>
              <h2 className="text-lg font-bold text-stone-900">{product.name}</h2>
              <span className="inline-block mt-1 text-xs font-semibold text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded-md">
                {product.category}
              </span>
            </div>
            <p className="text-xl font-extrabold text-amber-700 mt-6">
              ₹{product.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
