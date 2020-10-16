import React from 'react'; 
import useCounter from '../../hooks/useCounter';
import styles from './index.scss';
 
const Counter = () => { 
  const { count, add } = useCounter(0, () => {});

  return (
    <div>
      <div className={styles.count}>目前數字：{count}</div>
      <button onClick={() => { add(1) }}>點我加一</button>
    </div>
  );
};
  
export default Counter;
