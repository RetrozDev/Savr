import { useState } from "react";

import { fakeCategories } from "../../../data/fakeCategories";
import "./categories.css";

export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "f37c4a2b-6e8b-4df9-9228-2ad8c9c2d33a"
  );
  return (
    <div className="categories">
      {fakeCategories.map((category) => (
        <article
          key={category.uuid}
          className={category.uuid === selectedCategory ? "selected" : ""}
          onClick={() => {
            setSelectedCategory(category.uuid);
          }}
        >
          {category.emoji} • {category.name}
        </article>
      ))}
    </div>
  );
};
