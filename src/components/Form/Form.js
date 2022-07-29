import React from "react";
import classes from "./Form.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Modal from "../UI/Modal/Modal";
const Form = () => {
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(uiActions.toggleForm());
  };
  const confirmHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Modal>
      <form className={classes.form} onSubmit={confirmHandler}>
        <h3>Please Fill The Form</h3>
        <div className={classes.control}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" />
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" />
        </div>
        <div className={classes.control}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={closeForm}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
    </Modal>
  );
};

export default Form;
