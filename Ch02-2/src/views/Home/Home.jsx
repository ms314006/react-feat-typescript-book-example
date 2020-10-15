import React, { useState } from 'react';
import Counter from '../../components/Counter';
 
const Home = () => {
  const [displayCounter, setDisplayCounter] = useState(true);
 
  return (
    <div>
      <button onClick={() => { setDisplayCounter(true); }}>
        打開計數器
      </button>
      <button onClick={() => { setDisplayCounter(false); }}>
        關閉計數器
      </button>
      {displayCounter ? <Counter /> : null}
    </div>
  );
};


export default Home;
