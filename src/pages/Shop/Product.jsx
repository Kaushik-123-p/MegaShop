import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product rounded-lg w-[300px] h-[400px] m-10 flex flex-col items-center justify-center gap-4 bg-white shadow-md transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <img
        src={productImage}
        alt={productName}
        className="w-[250px] h-[250px] object-cover rounded-md"
      />

      <div className="description text-center">
        <h1 className="text-lg font-semibold">{productName}</h1>
        <p className="text-gray-600 font-medium">${price}</p>
      </div>

      <button
        className="bg-[#131313] text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out"
        onClick={() => addToCart(id)}
      >
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
