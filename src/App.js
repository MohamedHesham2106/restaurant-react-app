import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Navbar from "./components/Layout/Navbar";
import About from "./components/Layout/About";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Layout/Menu";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import Form from "./components/Form/Form";

let isInitial = true;
function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartShow = useSelector((state) => state.ui.cartIsVisible);
  const showForm = useSelector((state) => state.ui.formIsVisible);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <Fragment>
      <Navbar />
      <Header />
      {cartShow && <Cart />}
      {showForm && <Form />}
      <About />
      <Menu />
    </Fragment>
  );
}

export default App;
