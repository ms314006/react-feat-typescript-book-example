import React from 'react';
import ReactDOM from 'react-dom'; 
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About'; 
import Menu from './components/Menu'; 
import NotFound from './views/NotFound'; 
import News from './views/News';


 
ReactDOM.render(
  <HashRouter>
    <Menu />
    <Switch>
      <Route path="/news" component={News} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />  
      <Route path="/" component={NotFound} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
