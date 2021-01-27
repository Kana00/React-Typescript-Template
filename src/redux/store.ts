import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootScreenReducer, RootScreenDispatcher } from './reducer/rootScreenReducer';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 20 });

export const dispatcher = {
  RootScreenDispatcher,
};

const combinedReducer = combineReducers(
  {
    rootScreenReducer,
  },
);

export const store = createStore(combinedReducer, {}, composeEnhancers());

export type DispatcherType = typeof dispatcher;
export type StoreType = ReturnType<typeof combinedReducer>;
