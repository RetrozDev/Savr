import { useParams } from "react-router";
import { useEffect, useState, type JSX } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import "./recipepage.css";

type Ingredient = {
  uuid: string;
  name: string;
  quantity?: number;
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

type Category = {
  uuid: string;
  name: string;
};

export const RecipePage = (): JSX.Element => {
  const { uuid } = useParams<{ uuid: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [servingQuantity, setServingQuantity] = useState<number>(1);

  useEffect(() => {
    if (!uuid) return;

    const fetchRecipe = async () => {
      try {
        // Récupère la recette avec ses ingrédients
        const resRecipe = await fetch(`http://localhost:8000/recipes/${uuid}`);
        if (!resRecipe.ok) throw new Error("Recette introuvable");
        const dataRecipe: Recipe = await resRecipe.json();
        setRecipe(dataRecipe);

        // Récupère la catégorie
        const resCategory = await fetch(`http://localhost:8000/categories/${dataRecipe.category_uuid}`);
        if (resCategory.ok) {
          const dataCategory: Category = await resCategory.json();
          setCategory(dataCategory);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [uuid]);

  if (loading) return <p>Chargement...</p>;
  if (!recipe) return <p>Recette introuvable</p>;

  const formatIngredient = (ing: Ingredient): JSX.Element => {
    const name = ing.name.trim();
    const isVowel = /^[aeiouyàâäéèêëîïôöùûüœæ]/i.test(name);
    const article = isVowel ? "d'" : "de";

    return (
      <>
        {ing.quantity && ing.quantity * servingQuantity} {ing.unit} {article}{" "}
        <span className="ingredient-name">{name}</span>
      </>
    );
  };

  const formatMinutes = (time?: number): string => {
    if (!time) return "N/A";
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return hours > 0 ? `${hours}h ${minutes} minutes` : `${minutes} minutes`;
  };

  return (
    <main className="recipe-page">
      <Navbar />
      <section className="recipe">
        <header>
          <h1>{recipe.name}</h1>
          {recipe.img_src && (
            <div className="img-wrapper">
              <img src={recipe.img_src} alt={recipe.name} />
            </div>
          )}
        </header>
        {recipe.steps && recipe.steps.length > 0 && (
          <div className="steps">
            <h2>Étapes :</h2>
            <ul>
              {recipe.steps.map((step, idx) => (
                <li key={idx}>
                  {step} <input type="checkbox" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="recipe-infos">
        <article className="main-infos">
          <p>
            <span>Catégorie: </span>
            {category?.name}
          </p>
          <p>
            <span>Temps de préparation :</span>
            {formatMinutes(recipe.cooking_time)}
          </p>
        </article>

        {recipe.ingredients && recipe.ingredients.length > 0 && (
          <article className="ingredients">
            <div className="title">
              <h2>
                Ingrédients pour {servingQuantity} personne
                {servingQuantity > 1 ? "s" : ""}
              </h2>
              <div className="controls-wrapper">
                <button
                  onClick={() => servingQuantity > 1 && setServingQuantity(servingQuantity - 1)}
                >
                  -
                </button>
                {servingQuantity}
                <button onClick={() => setServingQuantity(servingQuantity + 1)}>+</button>
              </div>
            </div>
            <ul>
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>{formatIngredient(ing)}</li>
              ))}
            </ul>
          </article>
        )}
      </section>
    </main>
  );
};
