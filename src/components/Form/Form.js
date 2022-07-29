import React from "react";
import classes from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Modal from "../UI/Modal/Modal";
import useInput from "../../hooks/use-input";

const Form = () => {
  const fName = useInput((value) => value.trim() !== "");
  const street = useInput((value) => value.trim() !== "");
  const postalCode = useInput((value) => value.trim() !== "");
  const city = useInput((value) => value.trim() !== "");

  const cartItem = useSelector((state) => state.cart.items);
  const totalCost = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(uiActions.toggleForm());
  };

  let formIsValid = false;
  if (fName.isValid && street.isValid && postalCode.isValid && city.isValid) {
    formIsValid = true;
  }

  const confirmHandler = async () => {
    if (!formIsValid) {
      return;
    }
    await fetch(
      "https://react-http-9147f-default-rtdb.firebaseio.com/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: fName.value,
          street: street.value,
          postalCode: postalCode.value,
          city: city.value,
          orderedItem: cartItem,
          totalCost,
        }),
      }
    );
  };
  const nameControlClasses = `${classes.control} ${
    fName.hasError ? classes.invalid : ""
  }`;
  const streetControlClasses = `${classes.control} ${
    street.hasError ? classes.invalid : ""
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    postalCode.hasError ? classes.invalid : ""
  }`;
  const cityControlClasses = `${classes.control} ${
    city.hasError ? classes.invalid : ""
  }`;

  return (
    <Modal>
      <form className={classes.form} onSubmit={confirmHandler}>
        <h3>Please Fill The Form</h3>
        <div className={nameControlClasses}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            onChange={fName.changeHandler}
            onBlur={fName.BlurHandler}
            value={fName.value}
          />
        </div>
        <div className={streetControlClasses}>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            onChange={street.changeHandler}
            onBlur={street.BlurHandler}
            value={street.value}
          />
        </div>
        <div className={postalCodeControlClasses}>
          <label htmlFor="postal">Postal Code</label>
          <input
            type="text"
            id="postal"
            onChange={postalCode.changeHandler}
            onBlur={postalCode.BlurHandler}
            value={postalCode.value}
          />
        </div>
        <div className={cityControlClasses}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            onChange={city.changeHandler}
            onBlur={city.BlurHandler}
            value={city.value}
          />
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={closeForm}>
            Cancel
          </button>
          <button
            type="submit"
            className={classes.submit}
            disabled={!formIsValid}
          >
            Confirm
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Form;
