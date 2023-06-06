import Header from "./components/Header/Header";
import NewRecipeForm from "./components/NewRecipeForm";
import RecipeItem from "./components/RecipeItem/RecipeItem";
import { useGetRecipesQuery } from "./store/api/recipe.api";

const App = () => {
  const { isLoading, data: recipes } = useGetRecipesQuery();

  return (
    <section>
      <Header />
      {/* <User /> */}
      <NewRecipeForm />

      {isLoading ? (
        <h1>Loading...</h1>
      ) : recipes ? (
        <div>
          {recipes.map((recipe) => (
            <RecipeItem key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <h1>Not found</h1>
      )}
    </section>
  );
};

export default App;
