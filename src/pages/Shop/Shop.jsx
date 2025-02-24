import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="shop  ">
      <div className="shopTitle mt-[100px] text-center text-4xl">
        <h1>MegaCart Shop</h1>
      </div>
      <div className="products w-full h-auto grid grid-cols-4 place-items-center gap-4 p-4">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
