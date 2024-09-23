import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => {
        return {
          url: `/api/users/me`,
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),

    getSingleUser: builder.query({
      query: (id) => {
        return {
          url: `/api/users/me/${id}`,
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),

    updateUser: builder.mutation({
      query: (data) => {
        return {
          url: `/api/users/me`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
} = userApi;
