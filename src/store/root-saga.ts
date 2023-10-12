import { fork } from 'redux-saga/effects';
// Sagas
import { peopleSaga } from './people/saga';

export default function* rootSaga() {
  yield fork(peopleSaga);
}
