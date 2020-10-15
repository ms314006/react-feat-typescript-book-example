import React from 'react'; 
import styles from './index.scss';
 
const HelloWorld = () => ( 
  <div className={`${styles.nightMode} ${styles.title}`}>
    Hello world!
  </div>  
);
 
export default HelloWorld;
