import { useState } from "react";
import Header from "./components/Header/Header";
import NewRecipeForm from "./components/NewRecipeForm";
import RecipeItem from "./components/RecipeItem/RecipeItem";
import { RecipeSearch } from "./components/RecipeSearch";
import { useGetRecipesQuery } from "./store/api/recipe.api";

const App = () => {
  const [queryTerm, setQueryTerm] = useState<string>("");
  const { isLoading, data: recipes } = useGetRecipesQuery(queryTerm);

  const handleSearchQuery = (term: string) => {
    setQueryTerm(term);
  }

  return (
    <section>
      <Header />
      {/* <User /> */}
      <NewRecipeForm />
      <RecipeSearch handleSearchQuery={handleSearchQuery}/>

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
