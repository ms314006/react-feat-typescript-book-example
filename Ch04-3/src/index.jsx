 import 'regenerator-runtime/runtime';
import 'core-js/stable'; 
import React from 'react';
import ReactDOM from 'react-dom'; 
import { HashRouter, Switch, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux'; 
import store from './store';
import Home from './views/Home';
import About from './views/About'; 
import Menu from './components/Menu'; 
import NotFound from './views/NotFound'; 
import News from './views/News';


 
ReactDOM.render( 
  <Provider store={store}>
    <HashRouter>
      <Menu />
      <Switch>
        <Route path="/news" component={News} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />  
        <Route path="/" component={NotFound} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
