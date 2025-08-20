import React from "react";
import type { IProductProps } from "../../types/product";
import { addToCart } from "../../store/cartSlice.ts";
import { useDispatch } from "react-redux";
const Product: React.FC<IProductProps> = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div
      className="border rounded-lg border-gray-400 shadow p-4"
      key={product.id}
    >
      <h1 className="text-lg font-medium mb-2">{product.product_name}</h1>
      <p className="font-medium text-red-500 mb-2">${product.product_price}</p>
      <button onClick={() => dispatch(addToCart(product))} type="button" className="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
