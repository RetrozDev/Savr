import "./homepage.css";
import { Hero } from "../../components/home/hero/Hero";
import { Categories } from "../../components/home/categories/Categories";
import { Recipes } from "../../components/home/recipes/Recipes";

export const HomePage = () => {
  return (
    <main className="home-page">
      <Hero />
      <Categories />
      <Recipes />
    </main>
  );
};
