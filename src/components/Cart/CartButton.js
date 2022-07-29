import classes from "./CartButton.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Badge from "@mui/material/Badge";
import { ShoppingCart } from "@mui/icons-material";

export const CartButton = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <Badge
        badgeContent={totalQuantity}
        sx={{
          "& .MuiBadge-badge": {
            color: "white",
            backgroundColor: "crimson",
            fontSize: "14px",
          },
        }}
      >
        <ShoppingCart style={{ color: "#fff", fontSize: "2rem" }} />
      </Badge>
    </button>
  );
};

export default CartButton;
