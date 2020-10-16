import React, { useState } from 'react'; 
import styles from './index.scss';
 
const Counter = () => {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <div className={styles.count}>目前數字：{count}</div>
      <button onClick={() => { setCount(count + 1) }}>點我加一</button>
    </div>
  );
};
  
export default Counter;
