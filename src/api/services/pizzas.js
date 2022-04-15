// import { AxiosResponse } from 'axios';

import { ApiProvider } from "../provider";
// import { APIRoutes } from 'api/routes';
// import { ICategory } from 'common/interfaces/category';
// import { IPaginated } from 'common/interfaces';

class PizzasService {
getPizzas(
  ) {
    return ApiProvider.getRequest('https://6252b0d27f7fa1b1dde8d205.mockapi.io/pizzas');
  }
}

export const pizzasService = new PizzasService();