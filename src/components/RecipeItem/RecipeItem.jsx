import styles from "./RecipeItem.module.css";
import { useActions } from "../../hooks/useActions";
import { useFavourites } from "../../hooks/useFavourites";
import { useDeleteRecipeMutation } from "../../store/api/recipe.api";

/* eslint-disable react/prop-types */
const RecipeItem = ({ recipe }) => {
  const { favourites } = useFavourites();
  const { toggleFavorites } = useActions();
  const [deleteRecipe] = useDeleteRecipeMutation();

  const isExists = favourites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      <img src={recipe.image} alt={recipe.name} width={200} height={200} />
      <h3>{recipe.name}</h3>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExists ? "Remove from" : "Add to"} favourites
      </button>
      <button onClick={() => deleteRecipe(recipe.id)}>
        Delete Recipe
      </button>
    </div>
  );
};

export default RecipeItem;
