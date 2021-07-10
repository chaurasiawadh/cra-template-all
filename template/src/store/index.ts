import { combineReducers, Reducer } from 'redux';
import apiCallSaga from './sagas/apiCallSaga';
import { fork, all } from 'redux-saga/effects';
import exampleReducer from './reducer/exampleReducer'
import { FakeDataModal } from './models/actionModel';

export interface RootState {
  // add models
  homeData: FakeDataModal
}

export const createRootReducer = (): Reducer<any> =>
  combineReducers({
    // userDetails: userDetailsReducerFileImport
    homeData: exampleReducer
  });

export function* rootSaga(): Generator {
  yield all(
    [
      fork(apiCallSaga),
    ]);
}
