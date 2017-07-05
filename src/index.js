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
import Cart from './components/Cart';
import DishForm from './components/DishForm';
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
        <Route path="/admin" component={DishForm}/>
        <Route path="/cart" component={Cart}/>
      </Route>

    </Router>
  </Provider>, 
  document.getElementById('root')
);