import { SagaIterator } from 'redux-saga';
import { put, call, all, takeLeading } from 'redux-saga/effects';
// Types
import { People } from './types';

// Api
import { baseApi } from '../../api';
// Actions
import { getPeople } from './actions';
import { getPeopleSuccess, getPeopleFailure } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';

/**
 * API methods
 */

const fetchPeople = async (page: number = 1): Promise<People> => {
  return baseApi.get('people/', { params: { page } });
};

/**
 * Sagas
 */

function* getPeopleSaga(action: PayloadAction<number>) {
  const { payload } = action;
  try {
    const { data } = yield call(fetchPeople, payload);
    yield put(getPeopleSuccess(data));
  } catch (error) {
    yield put(getPeopleFailure(error));
  }
}

/**
 * Root feature saga
 */

export function* peopleSaga(): SagaIterator {
  yield all([yield takeLeading(getPeople, getPeopleSaga)]);
}
