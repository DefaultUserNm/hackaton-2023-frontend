import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
    login: string;
    lastName: string;
    firstName: string;
    middleName: string;
    phone: string;
    email: string;
}
interface Team {
    name: string;
    users: User[];
}

interface Component {
    name: string;
    ci: string;
    repoLink: string;
    stack: string[];
}
interface ProductDTO {
    name: string;
    products: [];
    components: Component[];
    teams: Team[];
}
export const { reducer, reducerPath, middleware, useGetProductDTOQuery } =
    createApi({
        reducerPath: "PRODUCT",
        baseQuery: fetchBaseQuery(),
        endpoints: (builder) => ({
            getProductDTO: builder.query<ProductDTO, void>({
                query: () => ({
                    method: "GET",
                    url: `/data`,
                }),
            }),
        }),
    });
