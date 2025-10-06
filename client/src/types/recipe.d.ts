import type { Ingredient } from "./ingredient";

export type Recipe = {
  uuid: string;
  name: string;
  categoryUuid: string;
  imgSrc: string;
  cookingTime: number;
  ingredients: Ingredient[];
  steps: string[];
};
