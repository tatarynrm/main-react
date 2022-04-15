import { createSelector } from 'reselect';

const getPizzas = (state) => state.pizza;

// const getTotalAmountOfCategories = (state: AppState) =>
//   state.categories.totalAmount;

const pending = (state) => state.pizzas.isPending;

const error = (state) => state.pizzas.error;

export const getPizzasSelector = createSelector(
  getPizzas,
  (pizzas) => pizzas
);

// export const getTotalAmountCategoriesSelector = createSelector(
//   getTotalAmountOfCategories,
//   (total) => total
// );

export const getPendingSelector = createSelector(pending, (pending) => pending);

export const getErrorSelector = createSelector(error, (error) => error);

export const pizzaSelectors = {
    getPizzasSelector,
//   getTotalAmountCategoriesSelector,
  getPendingSelector,
  getErrorSelector,
};
