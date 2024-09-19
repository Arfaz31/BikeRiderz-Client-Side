import { baseApi } from "../baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: ({
        startTime,
        sortBy,
        searchTerm,
        isAvailable,
        minPrice,
        maxPrice,
        brand,
        page = 1,
        limit = 12,
      }: {
        startTime?: string;
        sortBy?: string;
        searchTerm?: string;
        isAvailable?: string;
        minPrice?: number;
        maxPrice?: number;
        brand?: string;
        page?: number;
        limit?: number;
      } = {}) => {
        const params = new URLSearchParams();

        if (startTime) {
          params.append("startTime", startTime);
        }
        if (sortBy) {
          params.append("sortBy", sortBy);
        }
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        if (isAvailable) {
          params.append("isAvailable", isAvailable);
        }
        if (minPrice !== undefined) {
          params.append("minPrice", minPrice.toString());
        }
        if (maxPrice !== undefined) {
          params.append("maxPrice", maxPrice.toString());
        }
        if (brand) {
          params.append("brand", brand);
        }
        params.append("page", page.toString());
        params.append("limit", limit.toString());
        console.log(params.toString());
        return {
          url: "/api/bikes",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Bikes"],
    }),
    getSingleBikes: builder.query({
      query: (id) => {
        return {
          url: `/api/bikes/${id}`,
          method: "GET",
        };
      },
      providesTags: ["Bikes"],
    }),
  }),
});

export const { useGetAllBikesQuery, useGetSingleBikesQuery } = bikeApi;
