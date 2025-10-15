import { useEffect, useState } from "react";
import type { JSX } from "react";
import { useCategory } from "../../../contexts/CategoryContext";
import "./recipes.css";

type Ingredient = {
  uuid: string;
  name: string;
  quantity?: string;
  unit?: string;
  recipe_uuid?: string;
};

type Recipe = {
  uuid: string;
  name: string;
  category_uuid: string;
  img_src?: string;
  cooking_time?: number;
  steps?: string[];
  ingredients: Ingredient[];
};

export const Recipes = (): JSX.Element | null => {
  const { selectedCategory } = useCategory();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedCategory) return;

    const fetchRecipes = async () => {
      try {
        const res = await fetch("http://localhost:8000/recipes");
        if (!res.ok) throw new Error("Erreur lors du chargement des recettes");
        const data: Recipe[] = await res.json();

        // filtrer côté front par category_uuid
        setRecipes(data.filter((r) => r.category_uuid === selectedCategory.uuid));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [selectedCategory]);

  if (!selectedCategory) return null;
  if (loading) return <p>Chargement...</p>;

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

      {recipes.length > 0 ? (
        recipes.map((recipe: Recipe) => (
          <article key={recipe.uuid} onClick={() => gotoRecipe(recipe.uuid)}>
            {recipe.img_src && <img src={recipe.img_src} alt={recipe.name} />}
            <h2>{recipe.name}</h2>
            <ul>
              {recipe.ingredients.map((ing, i) => (
                <li key={`${recipe.uuid}-ing-${i}`}>
                  {formatIngredient(ing)}
                </li>
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
