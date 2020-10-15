import React, { useState, useEffect } from 'react';

const Counter = () => {  
  const [count, setCount] = useState(0);

  useEffect(() => { 
    console.log('Counter 第一次和因為 state 改變而重新渲染後');
    console.log(`Count 的新值為 ${count}`); 

    return () => {
      console.log(`Count 的舊值為 ${count}`); 
      console.log('Counter 被移除了');
    };
  }, [count]);
 
  return (
    <div>
      <div>目前數字：{count}</div>
      <button onClick={() => { setCount(count + 1); }}>
        點我加一
      </button>
    </div>
  );
}

export default Counter;
