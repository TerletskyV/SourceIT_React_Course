import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers';

const logger = store => next => action => {
  console.log('Action type: ' + action.type + ' -- Action payload: ' + action.payload);
  return next(action);
}

const middlewares = [
  logger
]

export const store = createStore(rootReducer, compose(
      applyMiddleware( ...middlewares ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
