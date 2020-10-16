import React from 'react';
import { Link } from 'react-router-dom';
 
const Menu = () => (
  <ul>
    <li>
      <Link to="/home">首頁</Link>
    </li>
    <li>
      <Link to="/about">關於我們</Link>
    </li> 
    <li>
      <Link to="/news">最新消息</Link>
    </li>
  </ul>
);
 
export default Menu;
