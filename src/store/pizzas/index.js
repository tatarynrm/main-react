import { reducer as pizzasReducer, actions } from './slice';
import { thunks } from './actions';
import { pizzaSelectors } from './selectors';

const pizzasActions = {
  ...actions,
  ...thunks,
};

export { pizzasReducer, pizzasActions, pizzaSelectors };