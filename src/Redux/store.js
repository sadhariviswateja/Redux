// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reducer from './reducer';
import counterSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  Reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(counterSaga);

export default store;
