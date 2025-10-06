from fastapi import APIRouter, HTTPException
from typing import List
from src.models.recipe import Recipe
from src.models.ingredient import Ingredient

router = APIRouter(prefix="/recipes", tags=["Recipes"])

# Base de données simulée
RECIPES = [
    Recipe(
        uuid="1",
        name="Pancakes",
        categoryUuid="dessert",
        imgSrc="pancakes.jpg",
        cookingTime=15,
        ingredients=[Ingredient("Flour", 200, "g"), Ingredient("Milk", 300, "ml"), Ingredient("Egg", 2, "pcs")],
        steps=["Mix ingredients", "Cook on pan", "Serve hot"]
    ),
    Recipe(
        uuid="2",
        name="Salade verte",
        categoryUuid="starter",
        imgSrc="salad.jpg",
        cookingTime=5,
        ingredients=[Ingredient("Lettuce", 1, "pcs"), Ingredient("Tomato", 2, "pcs")],
        steps=["Wash vegetables", "Chop", "Serve"]
    )
]

# GET all recipes
@router.get("/", response_model=List[dict])
def get_recipes():
    return [recipe.to_dict() for recipe in RECIPES]

# GET recipe by uuid
@router.get("/{recipe_uuid}", response_model=dict)
def get_recipe(recipe_uuid: str):
    for recipe in RECIPES:
        if recipe.uuid == recipe_uuid:
            return recipe.to_dict()
    raise HTTPException(status_code=404, detail="Recipe not found")
