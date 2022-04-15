import { configureStore } from '@reduxjs/toolkit';
import {
  createStateSyncMiddleware,
  initStateWithPrevTab,
} from 'redux-state-sync';
import logger from 'redux-logger';

import { reducer } from './reducer';


const reduxStateSyncMiddleware = createStateSyncMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(reduxStateSyncMiddleware)
      .concat(logger),
});

initStateWithPrevTab(store);

export { store };
