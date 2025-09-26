export type Recipe = {
  uuid: string;
  name: string;
  categoryUuid: string;
  imgSrc: string;
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
    imgSrc: "https://placehold.co/600x400?text=Salade-César",
    ingredients: [
      { name: "Laitue romaine", quantity: 200, unit: "g" },
      { name: "Poulet grillé", quantity: 150, unit: "g" },
      { name: "Croutons", quantity: 50, unit: "g" },
      { name: "Parmesan râpé", quantity: 30, unit: "g" },
      { name: "Sauce César", quantity: 50, unit: "ml" }
    ],
    steps: [
      "Laver et couper la laitue.",
      "Ajouter le poulet grillé coupé en dés.",
      "Ajouter les croutons et le parmesan.",
      "Verser la sauce et mélanger."
    ]
  },
  {
    uuid: "a1b2c3d4-1111-4e5f-9999-abcdef123456",
    name: "Bruschetta à la tomate",
    categoryUuid: "b4d1a9a7-7d56-4b6b-9c42-7e8e6b1d91a5", // Apéritif
    imgSrc: "https://placehold.co/600x400?text=Bruschetta",
    ingredients: [
      { name: "Baguette", quantity: 1, unit: "pièce" },
      { name: "Tomates", quantity: 200, unit: "g" },
      { name: "Basilic frais", quantity: 10, unit: "feuilles" },
      { name: "Huile d'olive", quantity: 20, unit: "ml" },
      { name: "Ail", quantity: 1, unit: "gousse" }
    ],
    steps: [
      "Couper la baguette en tranches.",
      "Frotter les tranches avec l'ail.",
      "Garnir de tomates en dés et de basilic.",
      "Arroser d'huile d'olive."
    ]
  },
  {
    uuid: "b2c3d4e5-2222-4f6a-8888-abcdef123456",
    name: "Velouté de potiron",
    categoryUuid: "6c9d0e4a-98f2-4c0c-bf5e-823f3e9f3bcb", // Soupe & Velouté
    imgSrc: "https://placehold.co/600x400?text=Velouté+de+potiron",
    ingredients: [
      { name: "Potiron", quantity: 500, unit: "g" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Bouillon de légumes", quantity: 500, unit: "ml" },
      { name: "Crème fraîche", quantity: 100, unit: "ml" },
      { name: "Beurre", quantity: 20, unit: "g" }
    ],
    steps: [
      "Éplucher et couper le potiron et l'oignon.",
      "Faire revenir dans le beurre.",
      "Ajouter le bouillon et cuire 20 minutes.",
      "Mixer et incorporer la crème."
    ]
  },
  {
    uuid: "c3d4e5f6-3333-4a7b-7777-abcdef123456",
    name: "Spaghetti Carbonara",
    categoryUuid: "2b6d5f9c-8f0a-4f76-91cb-d8e4f53f7d90", // Pâtes & Riz
    imgSrc: "https://placehold.co/600x400?text=Carbonara",
    ingredients: [
      { name: "Spaghetti", quantity: 300, unit: "g" },
      { name: "Lardons", quantity: 150, unit: "g" },
      { name: "Œufs", quantity: 3, unit: "pièces" },
      { name: "Parmesan", quantity: 50, unit: "g" },
      { name: "Poivre", quantity: 2, unit: "g" }
    ],
    steps: [
      "Cuire les spaghetti.",
      "Faire revenir les lardons.",
      "Mélanger les œufs battus avec le parmesan.",
      "Incorporer aux pâtes chaudes avec les lardons."
    ]
  },
  {
    uuid: "d4e5f6g7-4444-4b8c-6666-abcdef123456",
    name: "Pavé de saumon grillé",
    categoryUuid: "9d3c6a5e-7f21-4c3f-9b7a-3f1d2c6a7b2c", // Poissons & Fruits de mer
    imgSrc: "https://placehold.co/600x400?text=Saumon+Grillé",
    ingredients: [
      { name: "Pavé de saumon", quantity: 2, unit: "pièces" },
      { name: "Citron", quantity: 1, unit: "pièce" },
      { name: "Huile d'olive", quantity: 20, unit: "ml" },
      { name: "Sel", quantity: 2, unit: "g" },
      { name: "Poivre", quantity: 2, unit: "g" }
    ],
    steps: [
      "Badigeonner le saumon d'huile d'olive.",
      "Assaisonner avec sel et poivre.",
      "Griller 3 minutes de chaque côté.",
      "Arroser de jus de citron."
    ]
  },
  {
    uuid: "e5f6g7h8-5555-4c9d-5555-abcdef123456",
    name: "Mousse au chocolat",
    categoryUuid: "1f9c2d6a-3e7b-4f1c-9b8a-2d6b5e7c3a9d", // Dessert
    imgSrc: "https://placehold.co/600x400?text=Mousse+au+chocolat",
    ingredients: [
      { name: "Chocolat noir", quantity: 200, unit: "g" },
      { name: "Œufs", quantity: 4, unit: "pièces" },
      { name: "Sucre", quantity: 50, unit: "g" },
      { name: "Crème liquide", quantity: 100, unit: "ml" }
    ],
    steps: [
      "Faire fondre le chocolat.",
      "Monter les blancs en neige.",
      "Mélanger le chocolat avec les jaunes et le sucre.",
      "Incorporer délicatement les blancs."
    ]
  }
];

// Recettes supplémentaires
fakeRecipes.push(
  {
    uuid: "f6g7h8i9-6666-4d0e-4444-abcdef123456",
    name: "Quiche Lorraine",
    categoryUuid: "2b6d5f9c-8f0a-4f76-91cb-d8e4f53f7d90", // Pâtes & Riz
    imgSrc: "https://placehold.co/600x400?text=Quiche+Lorraine",
    ingredients: [
      { name: "Pâte brisée", quantity: 1, unit: "pièce" },
      { name: "Lardons fumés", quantity: 150, unit: "g" },
      { name: "Crème fraîche", quantity: 200, unit: "ml" },
      { name: "Œufs", quantity: 3, unit: "pièces" },
      { name: "Gruyère râpé", quantity: 80, unit: "g" }
    ],
    steps: [
      "Étaler la pâte dans un moule.",
      "Répartir les lardons.",
      "Mélanger œufs et crème, verser sur la pâte.",
      "Parsemer de gruyère et cuire 35 min à 180°C."
    ]
  },
  {
    uuid: "g7h8i9j0-7777-4e1f-3333-abcdef123456",
    name: "Tajine de poulet aux abricots",
    categoryUuid: "e4f3b2d1-91c7-4b52-bf84-d2b93e6a4d22", // Salade (à adapter si catégorie Tajine)
    imgSrc: "https://placehold.co/600x400?text=Tajine+Poulet+Abricots",
    ingredients: [
      { name: "Poulet", quantity: 600, unit: "g" },
      { name: "Abricots secs", quantity: 100, unit: "g" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Amandes", quantity: 30, unit: "g" },
      { name: "Épices à tajine", quantity: 10, unit: "g" }
    ],
    steps: [
      "Faire revenir le poulet et l'oignon.",
      "Ajouter les abricots, amandes et épices.",
      "Couvrir d'eau et mijoter 40 min.",
      "Servir chaud."
    ]
  },
  {
    uuid: "h8i9j0k1-8888-4f2a-2222-abcdef123456",
    name: "Soupe de courgettes au chèvre",
    categoryUuid: "6c9d0e4a-98f2-4c0c-bf5e-823f3e9f3bcb", // Soupe & Velouté
    imgSrc: "https://placehold.co/600x400?text=Soupe+Courgette+Chèvre",
    ingredients: [
      { name: "Courgettes", quantity: 500, unit: "g" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Bouillon de légumes", quantity: 500, unit: "ml" },
      { name: "Chèvre frais", quantity: 80, unit: "g" }
    ],
    steps: [
      "Faire revenir l'oignon.",
      "Ajouter les courgettes et le bouillon, cuire 20 min.",
      "Mixer et ajouter le chèvre."
    ]
  },
  {
    uuid: "i9j0k1l2-9999-4a3b-1111-abcdef123456",
    name: "Curry de pois chiches",
    categoryUuid: "2b6d5f9c-8f0a-4f76-91cb-d8e4f53f7d90", // Pâtes & Riz (à adapter si catégorie Curry)
    imgSrc: "https://placehold.co/600x400?text=Curry+Pois+Chiches",
    ingredients: [
      { name: "Pois chiches cuits", quantity: 400, unit: "g" },
      { name: "Tomates concassées", quantity: 200, unit: "g" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Lait de coco", quantity: 200, unit: "ml" },
      { name: "Curry", quantity: 10, unit: "g" }
    ],
    steps: [
      "Faire revenir l'oignon.",
      "Ajouter les pois chiches, tomates, lait de coco et curry.",
      "Laisser mijoter 20 min."
    ]
  },
  {
    uuid: "j0k1l2m3-aaaa-4b4c-2222-abcdef123456",
    name: "Tarte Tatin",
    categoryUuid: "1f9c2d6a-3e7b-4f1c-9b8a-2d6b5e7c3a9d", // Dessert
    imgSrc: "https://placehold.co/600x400?text=Tarte+Tatin",
    ingredients: [
      { name: "Pommes", quantity: 5, unit: "pièces" },
      { name: "Pâte feuilletée", quantity: 1, unit: "pièce" },
      { name: "Sucre", quantity: 100, unit: "g" },
      { name: "Beurre", quantity: 50, unit: "g" }
    ],
    steps: [
      "Caraméliser le sucre et le beurre dans un moule.",
      "Ajouter les pommes coupées.",
      "Recouvrir de pâte et cuire 30 min à 180°C.",
      "Démouler à l'envers."
    ]
  },
  {
    uuid: "k1l2m3n4-bbbb-4c5d-3333-abcdef123456",
    name: "Houmous maison",
    categoryUuid: "b4d1a9a7-7d56-4b6b-9c42-7e8e6b1d91a5", // Apéritif
    imgSrc: "https://placehold.co/600x400?text=Houmous",
    ingredients: [
      { name: "Pois chiches cuits", quantity: 250, unit: "g" },
      { name: "Tahini", quantity: 40, unit: "g" },
      { name: "Citron", quantity: 1, unit: "pièce" },
      { name: "Ail", quantity: 1, unit: "gousse" },
      { name: "Huile d'olive", quantity: 30, unit: "ml" }
    ],
    steps: [
      "Mixer tous les ingrédients jusqu'à consistance lisse.",
      "Servir frais avec du pain pita."
    ]
  },
  {
    uuid: "l2m3n4o5-cccc-4d6e-4444-abcdef123456",
    name: "Gratin dauphinois",
    categoryUuid: "2b6d5f9c-8f0a-4f76-91cb-d8e4f53f7d90", // Pâtes & Riz (à adapter si catégorie Gratins)
    imgSrc: "https://placehold.co/600x400?text=Gratin+Dauphinois",
    ingredients: [
      { name: "Pommes de terre", quantity: 800, unit: "g" },
      { name: "Crème liquide", quantity: 250, unit: "ml" },
      { name: "Lait", quantity: 200, unit: "ml" },
      { name: "Ail", quantity: 1, unit: "gousse" },
      { name: "Beurre", quantity: 30, unit: "g" }
    ],
    steps: [
      "Éplucher et couper les pommes de terre en fines rondelles.",
      "Frotter le plat avec l'ail, beurrer.",
      "Disposer les pommes de terre, verser crème et lait.",
      "Cuire 1h à 180°C."
    ]
  }
);
