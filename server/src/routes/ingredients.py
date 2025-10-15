from fastapi import APIRouter, HTTPException
from typing import List
from src.models.ingredient import Ingredient

router = APIRouter(prefix="/ingredients", tags=["Ingredients"])


# get all ingredients
@router.get("/", response_model=List[dict])
def get_ingredients():
    ingredients = Ingredient.get_all()
    if not ingredients:
        raise HTTPException(status_code=404, detail="No ingredients found")
    return [i.to_dict() for i in ingredients]


# get ingredient by uuid
@router.get("/{uuid}", response_model=dict)
def get_ingredient(uuid: str):
    ingredient = Ingredient.get_by_uuid(uuid)
    if not ingredient:
        raise HTTPException(status_code=404, detail=f"Ingredient {uuid} not found")
    return ingredient.to_dict()


# get all ingredients by recipe_uuid
@router.get("/by-recipe/{recipe_uuid}", response_model=List[dict])
def get_ingredients_by_recipe(recipe_uuid: str):
    ingredients = Ingredient.get_by_recipe_uuid(recipe_uuid)
    if not ingredients:
        raise HTTPException(
            status_code=404, detail=f"No ingredients found for recipe {recipe_uuid}"
        )
    return [i.to_dict() for i in ingredients]
