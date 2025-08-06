import React from "react";
import { products } from "../data/products.ts";

const ProductList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center">Products</h2>
      <div className="grid grid-cols-1 gap-6">
        {products.map((product) => (
          <div
            className="border rounded-lg border-gray-400 shadow p-4"
            key={product.id}
          >
            <h1 className="text-lg font-medium mb-2">{product.product_name}</h1>
            <p className="font-medium text-red-500 mb-2">
              ${product.product_price}
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
