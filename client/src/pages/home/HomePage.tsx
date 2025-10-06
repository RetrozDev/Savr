import "./homepage.css";
import { Hero } from "../../components/home/hero/Hero";
import { Categories } from "../../components/home/categories/Categories";
import { Recipes } from "../../components/home/recipes/Recipes";
import { Navbar } from "../../components/navbar/Navbar";

export const HomePage = () => {
  return (
    <main className="home-page">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="categories">
        <Categories />
      </section>

      <section id="recipes">
        <Recipes />
      </section>

      <section id="about">
        <h2>À propos</h2>
        <p>Ici tu présentes ton projet 👨‍🍳</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Un petit formulaire ou juste ton email</p>
      </section>
    </main>
  );
};
