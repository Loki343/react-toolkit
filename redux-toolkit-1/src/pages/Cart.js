import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const Products = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const removeitem = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {Products.map((e) => (
          <div className="cartCard">
            <img className="cardImg" src={e.image} alt="everyCardImage" />
            <h5>{e.title}</h5>
            <h5>{e.price}</h5>
            <button
              className="btn"
              onClick={() => {
                removeitem(e.id);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
