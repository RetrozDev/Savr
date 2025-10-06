import { useParams } from "react-router";
import { useState, type JSX } from "react";
import type { Ingredient, Recipe } from "../../data/fakeRecipes";
import { fakeRecipes } from "../../data/fakeRecipes";
import type { Category } from "../../types/category";
import { fakeCategories } from "../../data/fakeCategories";
import { Navbar } from "../../components/navbar/Navbar";

import "./recipepage.css";

export const RecipePage = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const recipe: Recipe | undefined = fakeRecipes.find(
    (recipe) => recipe.uuid === uuid
  );
  const category: Category | undefined = fakeCategories.find(
    (category) => category.uuid === recipe?.categoryUuid
  );

  const [servingQuantity, setServingQuantity] = useState<number>(1);

    const formatIngredient = (ing: Ingredient): JSX.Element => {
      const name = ing.name.trim();
      const isVowel = /^[aeiouyàâäéèêëîïôöùûüœæ]/i.test(name);
      const article = isVowel ? "d'" : "de";
  
      return (
        <>
          {ing.quantity * servingQuantity} {ing.unit} {article}{" "}
          <span className="ingredient-name">{name}</span>
        </>
      );
    };
  const formatMinutes = (time: number): string => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    if (hours > 0) {
      return `${hours}h ${minutes} minutes`;
    }
    return `${minutes} minutes`;
  };

  if (!recipe) return <p>Recette introuvable</p>;

  return (
    <main className="recipe-page">
      <Navbar />
      <section className="recipe">
        <header>
          <h1>{recipe.name}</h1>
          <div className="img-wrapper">
            <img src={recipe.imgSrc} alt={recipe.name} />
          </div>
        </header>
        <div className="steps">
          <h2>étapes :</h2>
          <ul>
            {recipe.steps.map((step) => (
              <li>
                {step} <input type="checkbox" name="" id="" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="recipe-infos">
        <article className="main-infos">
          <p>
            <span>Categorie: </span>
            {category?.name}
          </p>
          <p>
            <span>Temps de prepation :</span>
            {formatMinutes(recipe.cookingTime)}
          </p>
        </article>

        <article className="ingredients">
          <div className="title">
            <h2>
              Ingredients pour {servingQuantity} personne
              {servingQuantity > 1 ? "s" : ""}
            </h2>
            <div className="controls-wrapper">
              <button
                onClick={() => {
                  if (servingQuantity > 1) {
                    setServingQuantity(servingQuantity - 1);
                  }
                }}
              >
                -
              </button>
              {servingQuantity}
              <button onClick={() => setServingQuantity(servingQuantity + 1)}>
                +
              </button>
            </div>
          </div>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {formatIngredient(ingredient)}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
};
