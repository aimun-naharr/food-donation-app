import baseApi from ".";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSupplyPost: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/create-new",
        body: data,
      }),
      invalidatesTags: ["supply"],
    }),
    getAllSupplyPosts: builder.query({
      query: () => ({
        url: `/all-supplies`,
      }),
      providesTags: ["supply"],
    }),
    getOnePoduct: builder.query({
      query: (id) => ({
        url: `/items/${id}`,
      }),
    }),
    deleteSupply: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `items/${id}`,
      }),
      invalidatesTags: ["supply"],
    }),
    updateSupply: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `items/${id}`,
        body: data,
      }),
      invalidatesTags: ["supply"],
    }),
  }),
});

export const {
  useCreateSupplyPostMutation,
  useGetAllSupplyPostsQuery,
  useDeleteSupplyMutation,
  useGetOnePoductQuery,
  useUpdateSupplyMutation,
} = supplyApi;
