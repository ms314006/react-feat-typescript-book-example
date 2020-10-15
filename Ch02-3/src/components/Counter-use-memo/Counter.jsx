import React, { useState, useMemo } from 'react';

const Counter = () => {
  const [userName, setUseName] = useState('');
  const [count, setCount] = useState(0);
 
  const decoratedName = useMemo(() => {
    console.log('decorate name');
    return `超級${userName}！`;
  }, [userName]);
 
  return (
    <div>
      <div>使用者：{decoratedName}</div>
      <input
        value={userName}
        onChange={(e) => {setUseName(e.target.value)}}
      />
      <div>目前數字：{count}</div>
      <button onClick={() => { setCount(count + 1); }}>
        點我加一
      </button>
    </div>
  );
};

export default Counter;
