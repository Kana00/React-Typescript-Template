import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { rootScreenReducer } from './main_redux';


const combinedReducer = combineReducers(
  {
    rootScreenReducer,
  },
);


const store = createStore(combinedReducer, devToolsEnhancer({}));

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./main_redux', () => {
    const newRootReducer = require('./main_redux').default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export default store;
