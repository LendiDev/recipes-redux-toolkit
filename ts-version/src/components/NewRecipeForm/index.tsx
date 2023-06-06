import { FormEvent, useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";
import { IRecipeData } from "../../types/recipe.types";

const defaultFormInputs: IRecipeData = {
  name: "",
  image: "",
};

const NewRecipeForm = () => {
  const [newRecipe, setNewRecipe] = useState<IRecipeData>(defaultFormInputs);

  const [createRecipe] = useCreateRecipeMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
