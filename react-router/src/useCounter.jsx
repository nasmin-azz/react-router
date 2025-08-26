import React, { useState } from "react";

const useCounter = () => {
  let [count, setCount] = useState(0);

  let increase = () => {
    setCount(count + 1);
  };
  let decrease = () => {
    setCount(count - 1);
  };
  return {count, increase, decrease}
;
};

export default useCounter;
