import type { JSX } from "react";
import { useCategory } from "../../../contexts/CategoryContext";
import { fakeRecipes } from "../../../data/fakeRecipes";
import type { Recipe, Ingredient } from "../../../data/fakeRecipes";
import "./recipes.css";

export const Recipes = (): JSX.Element | null => {
  const { selectedCategory } = useCategory();

  if (!selectedCategory) return null;

  const recipesInCategory = fakeRecipes.filter(
    (r) => r.categoryUuid === selectedCategory.uuid
  );

  const formatIngredient = (ing: Ingredient): JSX.Element => {
    const name = ing.name.trim();
    const isVowel = /^[aeiouyàâäéèêëîïôöùûüœæ]/i.test(name);
    const article = isVowel ? "d'" : "de";

    return (
      <>
        {ing.quantity} {ing.unit} {article}{" "}
        <span className="ingredient-name">{name}</span>
      </>
    );
  };

  const gotoRecipe = (recipeUuid: string): void => {
    location.href = `/recipe/${recipeUuid}`;
  };

  return (
    <div className="recipes">
      <h1>{selectedCategory.name}</h1>

      {recipesInCategory.length > 0 ? (
        recipesInCategory.map((recipe: Recipe) => (
          <article key={recipe.uuid} onClick={() => gotoRecipe(recipe.uuid)}>
            <img src={recipe.imgSrc} alt={recipe.name} />
            <h2>{recipe.name}</h2>
            <ul>
              {recipe.ingredients.map((ing, i) => (
                <li key={`${recipe.uuid}-ing-${i}`}>{formatIngredient(ing)}</li>
              ))}
            </ul>
          </article>
        ))
      ) : (
        <h2>Aucune recette pour cette catégorie 😔</h2>
      )}
    </div>
  );
};
