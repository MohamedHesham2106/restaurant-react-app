import React from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import CartItem from "./CartItem";
const Cart = () => {
  const Items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const checkoutHandler = () => {
    dispatch(uiActions.toggleForm());
    dispatch(uiActions.toggleCart());
  };
  const closeHandler = () => {
    dispatch(uiActions.toggleCart());
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {Items.map((item) => (
        <CartItem
          key={item.id}
          item={{
            id: item.id,
            title: item.name,
            quantity: item.quantity,
            total: item.totalPrice,
            price: item.price,
            photo: item.photo,
          }}
        />
      ))}
    </ul>
  );
  const proceedToForm = Items.length > 0;
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeHandler}>
          Close
        </button>
        {proceedToForm &&<button onClick={checkoutHandler} className={classes.button}>
          Order
        </button>}
      </div>
    </Modal>
  );
};

export default Cart;
