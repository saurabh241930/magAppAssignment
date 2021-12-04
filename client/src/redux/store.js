import { reducers } from "../reducers";
import thunk from 'redux-thunk';
import LogRocket from 'logrocket';

import { createStore, applyMiddleware, compose } from 'redux';




const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk,LogRocket.reduxMiddleware()),
    
    // other store enhancers if any
  );

const store = createStore(reducers, enhancer);


export default store;
