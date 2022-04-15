import { createAsyncThunk } from '@reduxjs/toolkit';

// import { ActionType } from './common';

import { GET_PIZZAS } from './common';
import { pizzasService } from '../../api/services/pizzas';
// import { IUpdateRoom } from 'common/interfaces';
// import { store } from 'store';

const getPizzas = createAsyncThunk(
  GET_PIZZAS,
  async () => {
    const response = await pizzasService.getPizzas();
    console.log(response);
    return {
      pizzas: response.data,
    };
  }
);

const thunks = {
  getPizzas,
};

export { thunks };
