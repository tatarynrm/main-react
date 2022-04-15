import { combineReducers } from 'redux';
import { withReduxStateSync } from 'redux-state-sync';
import { pizzasReducer } from './pizzas';
// import { AppState } from 'common';
// import { AnyAction } from '@reduxjs/toolkit';

// import { ReducerName } from 'common/enums/app';

const combinedReducers = combineReducers({
  ['pizza']: pizzasReducer,
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};

const reducer = withReduxStateSync(
  rootReducer
);

export { reducer };
