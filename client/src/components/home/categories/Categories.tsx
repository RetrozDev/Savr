import { useEffect, useState } from "react";
import { useCategory } from "../../../contexts/CategoryContext";
import "./categories.css";
import type { Category } from "../../../types/category";

export const Categories = () => {
  const { selectedCategory, setSelectedCategory } = useCategory();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:8000/categories/");
        if (!res.ok) throw new Error("Erreur de chargement des catégories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="categories">
      {categories.map((category) => (
        <article
          key={category.uuid}
          className={category.uuid === selectedCategory?.uuid ? "selected" : ""}
          onClick={() => setSelectedCategory(category)}
        >
          {category.emoji} • {category.name}
        </article>
      ))}
    </div>
  );
};
