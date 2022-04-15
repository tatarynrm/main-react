import { createSlice } from '@reduxjs/toolkit';

// import { ReducerName } from 'common/enums/app';
// import { ICategory } from 'common/interfaces/category';
// import { resetState } from 'store/reset';
import { thunks } from './actions';

// ActionType.ADD_TO_KORZUNA = 'addToKorzuna'
const initialState = {
  pizzas: [],
//   totalAmount: 0,
  error: null,
  isPending: false,
};
// name ?
const { reducer, actions } = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.getPizzas.fulfilled, (state, action) => {
        console.log(action.payload);
        state.pizzas = action.payload.pizzas;
        // state.totalAmount = action.payload.total;
        state.error = null;
        state.isPending = false;
      })
      .addCase(thunks.getPizzas.rejected, (state, action) => {
        state.error = action.error.message;
        state.isPending = false;
      })
      .addCase(thunks.getPizzas.pending, (state, action) => {
        state.isPending = true;
      });
  },
});

export { reducer, actions };
