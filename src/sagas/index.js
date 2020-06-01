import { all, fork } from 'redux-saga/effects';
import weatherSagas from './weather';

export default function* rootSaga() {
  yield all([
    fork(weatherSagas)
    // fork(...otherSaga)
  ]);
}
