import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import asyncCatch from 'redux-async-catch';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import { handleErrors } from './actions/error';
import { deleteError } from './actions/error';

export const history = createHistory();
history.listen((location, action) => {
  store.dispatch(deleteError())
})

const initialState = {};
const enhancers = [];
const middleware = [
  asyncCatch(handleErrors),
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store