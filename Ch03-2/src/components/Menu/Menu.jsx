import React from 'react';
import { useHistory } from 'react-router-dom';
 
const Menu = () => {
  const history = useHistory();
  const changeRouter = (router) => {
    history.push(router);
  };
 
  return (
    <ul>
      <li onClick={() => changeRouter('/home')}>首頁</li>
      <button onClick={() => changeRouter('/about')}>關於我們</button> 
      <a onClick={() => changeRouter('/news')}>最新消息</a>
    </ul>
  )
};
 
export default Menu;
