import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./Product.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Product = (props) => {
  const { title, price, id, photo, type } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        photo,
        title,
        price,
      })
    );
  };
  return (
    <div className={classes["product-card"]}>
      <div className={classes.badge}>{type}</div>
      <div className={classes["product-tumb"]}>
        <img src={photo} alt={title} />
      </div>
      <div className={classes["product-details"]}>
        <h4>
          <span>{title}</span>
        </h4>
        <div className={classes["product-bottom-details"]}>
          <div className={classes["product-price"]}>${price}</div>
          <div className={classes["product-links"]}>
            <span>
              <AddShoppingCartIcon
                onClick={addToCartHandler}
                style={{ color: "black", cursor: "pointer" }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
