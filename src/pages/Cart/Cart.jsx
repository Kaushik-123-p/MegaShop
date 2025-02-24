import React, { useContext } from "react";
import { PRODUCTS } from "../../products";

import CartItem from "./cartItem";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContextProvider";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart flex flex-col items-center justify-center ">
      <div>
        <h1 className="text-4xl font-semibold  p-4">You Cart Items</h1>
      </div>
      <div className="cartItems ">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout flex flex-col items-center justify-between w-[500px] p-5 gap-y-5">
          <p className="text-2xl font-semibold">Subtotal : $ {totalAmount}</p>
          <div className="flex items-center justify-between gap-x-5">
            <button
              className="bg-[#131313] text-white px-5 py-2.5 rounded-lg font-semibold shadow-md"
              onClick={() => navigate("/")}
            >
              Countinue Shopping
            </button>
            <button className="bg-[#131313] text-white px-5 py-2.5 rounded-lg font-semibold shadow-md">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-6xl font-bold p-4 flex items-center justify-center  h-96">
          Your Cart is Empty
        </h1>
      )}
    </div>
  );
};

export default Cart;
