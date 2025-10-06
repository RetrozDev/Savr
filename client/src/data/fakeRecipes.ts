export type Recipe = {
  uuid: string;
  name: string;
  categoryUuid: string;
  imgSrc: string;
  cookingTime: number;
  ingredients: Ingredient[];
  steps: string[];
};

export type Ingredient = {
  name: string;
  quantity: number;
  unit: string;
};

export const fakeRecipes: Recipe[] = [
  {
    uuid: "1a2b3c4d-1111-4a2b-9999-abcdef123456",
    name: "Salade César",
    categoryUuid: "e4f3b2d1-91c7-4b52-bf84-d2b93e6a4d22", // Salade
    imgSrc:
      "https://images.pexels.com/photos/2092903/pexels-photo-2092903.jpeg",
    cookingTime: 20,
    ingredients: [
      { name: "Laitue romaine", quantity: 200, unit: "g" },
      { name: "Poulet grillé", quantity: 150, unit: "g" },
      { name: "Croutons", quantity: 50, unit: "g" },
      { name: "Parmesan râpé", quantity: 30, unit: "g" },
      { name: "Sauce César", quantity: 50, unit: "ml" },
    ],
    steps: [
      "Laver et couper la laitue.",
      "Ajouter le poulet grillé coupé en dés.",
      "Ajouter les croutons et le parmesan.",
      "Verser la sauce et mélanger.",
    ],
  },
  {
    uuid: "a1b2c3d4-1111-4e5f-9999-abcdef123456",
    name: "Bruschetta à la tomate",
    categoryUuid: "b4d1a9a7-7d56-4b6b-9c42-7e8e6b1d91a5", // Apéritif
    imgSrc:
      "https://images.pexels.com/photos/33985911/pexels-photo-33985911.jpeg",
    cookingTime: 20,
    ingredients: [
      { name: "Baguette", quantity: 1, unit: "pièce" },
      { name: "Tomates", quantity: 200, unit: "g" },
      { name: "Basilic frais", quantity: 10, unit: "feuilles" },
      { name: "Huile d'olive", quantity: 20, unit: "ml" },
      { name: "Ail", quantity: 1, unit: "gousse" },
    ],
    steps: [
      "Couper la baguette en tranches.",
      "Frotter les tranches avec l'ail.",
      "Garnir de tomates en dés et de basilic.",
      "Arroser d'huile d'olive.",
    ],
  },
  {
    uuid: "b2c3d4e5-2222-4f6a-8888-abcdef123456",
    name: "Velouté de potiron",
    categoryUuid: "6c9d0e4a-98f2-4c0c-bf5e-823f3e9f3bcb", // Soupe & Velouté
    imgSrc: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
    cookingTime: 75,
    ingredients: [
      { name: "Potiron", quantity: 500, unit: "g" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Bouillon de légumes", quantity: 500, unit: "ml" },
      { name: "Crème fraîche", quantity: 100, unit: "ml" },
      { name: "Beurre", quantity: 20, unit: "g" },
    ],
    steps: [
      "Éplucher et couper le potiron et l'oignon.",
      "Faire revenir dans le beurre.",
      "Ajouter le bouillon et cuire 20 minutes.",
      "Mixer et incorporer la crème.",
    ],
  },
  {
    uuid: "c3d4e5f6-3333-4a7b-7777-abcdef123456",
    name: "Spaghetti Carbonara",
    categoryUuid: "2b6d5f9c-8f0a-4f76-91cb-d8e4f53f7d90", // Pâtes & Riz
    imgSrc:
      "https://images.pexels.com/photos/2703468/pexels-photo-2703468.jpeg",
    cookingTime: 60,
    ingredients: [
      { name: "Spaghetti", quantity: 300, unit: "g" },
      { name: "Lardons", quantity: 150, unit: "g" },
      { name: "Œufs", quantity: 3, unit: "pièces" },
      { name: "Parmesan", quantity: 50, unit: "g" },
      { name: "Poivre", quantity: 2, unit: "g" },
    ],
    steps: [
      "Cuire les spaghetti.",
      "Faire revenir les lardons.",
      "Mélanger les œufs battus avec le parmesan.",
      "Incorporer aux pâtes chaudes avec les lardons.",
    ],
  },
  {
    uuid: "d4e5f6g7-4444-4b8c-6666-abcdef123456",
    name: "Pavé de saumon grillé",
    categoryUuid: "9d3c6a5e-7f21-4c3f-9b7a-3f1d2c6a7b2c", // Poissons & Fruits de mer
    imgSrc: "https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg",
    cookingTime: 60,
    ingredients: [
      { name: "Pavé de saumon", quantity: 2, unit: "pièces" },
      { name: "Citron", quantity: 1, unit: "pièce" },
      { name: "Huile d'olive", quantity: 20, unit: "ml" },
      { name: "Sel", quantity: 2, unit: "g" },
      { name: "Poivre", quantity: 2, unit: "g" },
    ],
    steps: [
      "Badigeonner le saumon d'huile d'olive.",
      "Assaisonner avec sel et poivre.",
      "Griller 3 minutes de chaque côté.",
      "Arroser de jus de citron.",
    ],
  },
  {
    uuid: "e5f6g7h8-5555-4c9d-5555-abcdef123456",
    name: "Mousse au chocolat",
    categoryUuid: "1f9c2d6a-3e7b-4f1c-9b8a-2d6b5e7c3a9d", // Dessert
    imgSrc:
      "https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg",
    cookingTime: 60,
    ingredients: [
      { name: "Chocolat noir", quantity: 200, unit: "g" },
      { name: "Œufs", quantity: 4, unit: "pièces" },
      { name: "Sucre", quantity: 50, unit: "g" },
      { name: "Crème liquide", quantity: 100, unit: "ml" },
    ],
    steps: [
      "Faire fondre le chocolat.",
      "Monter les blancs en neige.",
      "Mélanger le chocolat avec les jaunes et le sucre.",
      "Incorporer délicatement les blancs.",
    ],
  },
];
