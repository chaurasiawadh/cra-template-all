import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RootState, createRootReducer, rootSaga } from 'src/store';

export default function configureStore(initialState: RootState): Store<RootState> {
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const store: Store = createStore(
    createRootReducer(),
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga);
  return store;
}
