import { fakeCategories } from "../../../data/fakeCategories";
import { useCategory } from "../../../contexts/CategoryContext";
import "./categories.css";

export const Categories = () => {
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <div className="categories">
      {fakeCategories.map((category) => (
        <article
          key={category.uuid}
          className={category.uuid === selectedCategory.uuid ? "selected" : ""}
          onClick={() => setSelectedCategory(category)}
        >
          {category.emoji} • {category.name}
        </article>
      ))}
    </div>
  );
};
