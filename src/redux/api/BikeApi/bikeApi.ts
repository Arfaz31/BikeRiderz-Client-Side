import { baseApi } from "../baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: () => {
        return {
          url: "/api/bikes",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllBikesQuery } = bikeApi;
