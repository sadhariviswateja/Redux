// saga.js
import { takeEvery, put } from 'redux-saga/effects';
import {
  INCREMENT_REQUEST,
  DECREMENT_REQUEST,
  RESET_REQUEST,
} from './action';

function* incrementSaga() {
  yield put({ type: 'INCREMENT' });
}

function* decrementSaga() {
  yield put({ type: 'DECREMENT' });
}

function* resetSaga() {
  yield put({ type: 'RESET' });
}

function* counterSaga() {
  yield takeEvery(INCREMENT_REQUEST, incrementSaga);
  yield takeEvery(DECREMENT_REQUEST, decrementSaga);
  yield takeEvery(RESET_REQUEST, resetSaga);
}

export default counterSaga;
