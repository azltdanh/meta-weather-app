import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createReducer from '../reducers';
import rootSaga from '../sagas';

export function configureStore() {
  const logger = createLogger({});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [logger, sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(createReducer(), {}, composeEnhancers(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
}

export const store = configureStore();
