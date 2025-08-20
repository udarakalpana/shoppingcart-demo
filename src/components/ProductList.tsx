import React from "react";
import { products } from "../data/products.ts";
import Product from "./Product.tsx";

const ProductList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="mb-4 text-3xl font-bold text-center text-slate-800">Products</h2>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
