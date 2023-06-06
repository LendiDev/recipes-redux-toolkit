import { api } from "./api";

export const recipesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => ({
        url: "/",
        method: 'GET',
        params: {
          _order: "desc",
          _sort: "id",
        },
      }),
      providesTags: () => [
        {
          type: "Recipes",
        },
      ],
    }),
    createRecipe: builder.mutation({
      query: (recipe) => ({
        url: "/",
        method: "POST",
        body: recipe,
      }),
      invalidatesTags: () => [
        {
          type: "Recipes",
        },
      ],
    }),
    deleteRecipe: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: () => [
        {
          type: "Recipes",
        },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetRecipesQuery,
  useCreateRecipeMutation,
  useDeleteRecipeMutation,
} = recipesApi;
