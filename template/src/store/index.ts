import { combineReducers } from 'redux';
import apiCallSaga from './sagas/apiCallSaga';
import { fork, all } from 'redux-saga/effects';
import exampleReducer from './reducer/exampleReducer'

export interface RootState {
  // add models
  homeData: any
}

export const createRootReducer = (): any =>
  combineReducers({
    // add reducer file
    // userDetails: userDetailsReducerFileImport
    homeData: exampleReducer
  });

export function* rootSaga(): Generator {
  yield all(
    [
      fork(apiCallSaga),
    ]);
}
