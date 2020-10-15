import React, { useState, useEffect } from 'react';

const Title = React.memo(() => {
  console.log('Render title component');
  return (
    <div>
      <h1>計數器</h1>
    </div>
  );
}, (prevProps, nextProps) => {
  console.log(prevProps, nextProps);
  return false; // 回傳 false 就還是會重新繪製
});
 
const Counter = () => {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <Title />
      <div>目前數字：{count}</div>
      <button onClick={() => { setCount(count + 1); }}>
        點我加一
      </button>
    </div>
  );
};


export default Counter;
