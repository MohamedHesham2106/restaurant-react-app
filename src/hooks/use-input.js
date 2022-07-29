import { useReducer } from "react";
const initialInputState = { value: "", isTouched: false };
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return initialInputState;
};

const useInput = (validation) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  const validInput = validation(inputState.value);
  const hasError = !validInput && inputState.isTouched;
  const changeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };
  const BlurHandler = () => {
    dispatch({ type: "BLUR" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return {
    value: inputState.value,
    hasError,
    isValid: validInput,
    changeHandler,
    BlurHandler,
    reset,
  };
};
export default useInput;
