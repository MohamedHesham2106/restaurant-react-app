import classes from "./Modal.module.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElem = document.getElementById("overlay");
const Modal = (props) => {
  const dispatch = useDispatch();
  const CloseCartHandler = () => {
    dispatch(uiActions.toggleAll());
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={CloseCartHandler} />,
        portalElem
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElem
      )}
    </Fragment>
  );
};
export default Modal;
