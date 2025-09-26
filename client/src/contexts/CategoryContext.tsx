// CategoryContext.tsx
import { createContext, useContext, useState,  type ReactNode } from "react";
import type { Category } from "../types/category";
import { fakeCategories } from "../data/fakeCategories";

type CategoryContextType = {
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    fakeCategories[2] // Plat principal par défaut
  );

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components 
export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) throw new Error("useCategory must be used within a CategoryProvider");
  return context;
};
