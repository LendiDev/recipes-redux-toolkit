import { IRecipe, IRecipeData } from "../../types/recipe.types";
import { api } from "./api";

export const recipesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecipes: builder.query<IRecipe[], string>({
      query: (searchTerm) => ({
        url: "/",
        method: 'GET',
        params: {
          _order: "desc",
          _sort: "id",
          q: searchTerm,
        },
      }),
      providesTags: () => [
        {
          type: "Recipes",
        },
      ],
    }),
    createRecipe: builder.mutation<null, IRecipeData>({
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
    deleteRecipe: builder.mutation<null, number>({
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
