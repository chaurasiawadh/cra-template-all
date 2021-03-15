import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RootState, createRootReducer, rootSaga } from 'src/store';

export default function configureStore(initialState: RootState): Store<RootState> {
  // create the composing function for our middlewares
  // const window1: any = window;

  // const composeEnhancers =
  //   process.env.NODE_ENV === 'development'
  //     ? window1['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose
  //     : (null || compose);

  // let composeEnhancers = null;
  // if (process.env.NODE_ENV === 'development') {
  //   composeEnhancers = window1['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose;
  // } else {
  //   composeEnhancers = compose;
  // }

  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const store: any = createStore(
    createRootReducer(),
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga);
  return store;
}
