import { useState } from "react";

const useInput = (validation) => {
  const [Input, setInput] = useState("");
  const [onFocus, setOnFocus] = useState(false);

  const isValid = validation(Input);
  const hasError = !Input && onFocus;

  const changeHandler = (event) => {
    setInput(event.target.value);
  };
  const BlurHandler = (event) => {
    setOnFocus(true);
  };

  const reset = () => {
    setInput("");
    setOnFocus(false);
  };
  return {
    value: Input,
    hasError,
    isValid,
    changeHandler,
    BlurHandler,
    reset,
  };
};
export default useInput;
