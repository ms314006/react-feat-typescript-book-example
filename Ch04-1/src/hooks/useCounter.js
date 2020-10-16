import { useState, useEffect } from 'react';
 
const useCounter = (initialCount, callbackFunction) => {
  const [count, setCount] = useState(initialCount);
 
  useEffect(callbackFunction, [count]);

  const add = (addend) => {
    setCount(count + addend);
  };
   
  return { count, add };
};
 
export default useCounter;
