import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {PRODUCTS_URL} from "../../constants";

export interface User {
  login: string;
  lastName: string;
  firstName: string;
  middleName: string;
  phone: string;
  email: string;
}

export interface Team {
  name: string;
  users: User[];
}

export interface ProductComponent {
  name: string;
  ci: string;
  repoLink: string;
  stack: string[];
}
interface ProductDTO {
  name: string;
  products: [];
  components: ProductComponent[];
  team: Team;
}
export const { reducer, reducerPath, middleware, useGetProductDTOQuery } =
  createApi({
    reducerPath: "PRODUCT",
    baseQuery: fetchBaseQuery({ baseUrl: PRODUCTS_URL }),
    endpoints: (builder) => ({
      getProductDTO: builder.query<ProductDTO[], void>({
        query: () => ({
          method: "GET",
          url: `/api/api/v1/products`,
        }),
      }),
    }),
  });
