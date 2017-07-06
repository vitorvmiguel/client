// dependencies
import React                                          from 'react';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// components
import App from './components/App';
import DishesList from './components/DishesList';
import Contact from './components/Contact';
import Login from './components/Login';
import DishForm from './components/DishForm';
import About from './components/About';
import DishShow from './components/DishShow';
import './css/index.css';
// state management
import reducers  from './reducers/index';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={DishesList}/>
        <Route path="/about" component={About}/>
        <Route path="/chef" component={DishForm}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/login" component={Login}/>
        <Route path="/dishes/:id" component={DishShow}/>
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('root')
);