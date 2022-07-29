import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id, photo } = props.item;
  /* console.log(title); */
  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        title,
        price,
        photo,
      })
    );
  };
  return (
    <li className={classes.item}>
      <div className={classes["item-left"]}>
        <h3>{title}</h3>
        <img src={photo} alt={title} />
      </div>
      <div className={classes["item-right"]}>
        <span className={classes.price}>${total}</span>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <span className={classes.quantity}>{quantity}</span>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};
export default CartItem;
