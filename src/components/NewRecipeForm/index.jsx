import { useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";

const defaultFormInputs = {
  name: "",
  image: "",
};

const NewRecipeForm = () => {
  const [newRecipe, setNewRecipe] = useState(defaultFormInputs);

  const [createRecipe] = useCreateRecipeMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    createRecipe(newRecipe).then(() => {
      setNewRecipe(defaultFormInputs);
    });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Create New Recipe:</h2>
        <label>
          Recipe Name
          <input
            type="text"
            value={newRecipe.name}
            onChange={(e) => {
              setNewRecipe((currentState) => ({
                ...currentState,
                name: e.target.value,
              }));
            }}
          ></input>
        </label>
        <label>
          Image URL
          <input
            type="text"
            value={newRecipe.image}
            onChange={(e) => {
              setNewRecipe((currentState) => ({
                ...currentState,
                image: e.target.value,
              }));
            }}
          ></input>
        </label>
        <button type="submit">Add New Recipe</button>
      </form>
    </section>
  );
};

export default NewRecipeForm;
