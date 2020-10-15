import React, { useState, useCallback } from 'react';

const IncrementButton = React.memo((props) => {
  console.log('Button 被重新渲染');
  return (
    <button onClick={props.increment}>
      點我加一
    </button>
  );
});
 
const Counter = () => {
  const [count, setCount] = useState(0);
 
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
 
  return (
    <div>
      <div>目前數字：{count}</div>
      <IncrementButton increment={increment} />
    </div>
  );
};

export default Counter;
