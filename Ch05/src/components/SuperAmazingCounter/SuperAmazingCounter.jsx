import React from 'react';
import useCounter from '../../hooks/useCounter';

const SuperAmazingCounter = () => { 
  const { count, add } = useCounter(
    100, () => { console.log('超炫砲計數器執行'); }
  );
 
  return (
    <div>
      <div>目前超炫砲的數字：{count}</div>
      <button onClick={() => { add(10); }}>
        點我加一
      </button>
    </div>
  );
};

export default SuperAmazingCounter;
