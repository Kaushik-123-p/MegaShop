import { IoAddCircle } from "react-icons/io5";
import { IoRemoveCircle } from "react-icons/io5";
import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem w-[500px] h-[150px] flex items-center justify-center  shadow-lg rounded-2xl m-8 gap-x-20 px-10 border border-gray-300  transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={productImage} alt="" className="w-[100px]" />
      <div className="description w-full text-2xl ">
        <h1 className="font-semibold">{productName}</h1>
        <p>${price}</p>

        <div className="countHandler flex items-center justify-center w-20  ">
          <button onClick={() => removeFromCart(id)}>
            <IoRemoveCircle />
          </button>
          <input
            type="text"
            className="w-10  h-5 text-center"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>
            <IoAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
