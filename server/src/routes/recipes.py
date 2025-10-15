from fastapi import APIRouter, HTTPException
from typing import List
from src.models.recipe import Recipe

router = APIRouter(prefix="/recipes", tags=["Recipes"])

@router.get("/", response_model=List[dict])
def get_recipes():
    recipes = Recipe.get_all()
    if not recipes:
        raise HTTPException(status_code=404, detail="No recipes found")
    return [r.to_dict() for r in recipes]

@router.get("/{uuid}", response_model=dict)
def get_recipe(uuid: str):
    recipe = Recipe.get_by_uuid(uuid)
    if not recipe:
        raise HTTPException(status_code=404, detail=f"Recipe {uuid} not found")
    return recipe.to_dict()
