from fastapi import APIRouter, HTTPException
from typing import List
from src.models.categorie import Category
router = APIRouter(prefix="/categories", tags=["Categories"])

CATEGORIES = [
    Category(uuid="dessert", name="Dessert", emoji="🍰"),
    Category(uuid="starter", name="Entrée", emoji="🥗"),
    Category(uuid="main", name="Plat principal", emoji="🍲"),
    Category(uuid="drink", name="Boisson", emoji="🥤"),
    Category(uuid="snack", name="Snack", emoji="🍿")
]

@router.get("/",response_model=List[dict])
def get_gategories():
    return [category.to_dict() for category in CATEGORIES]

@router.get("/{category_uuid}", response_model=dict)
def get_recipe(category_uuid: str):
    for category in CATEGORIES:
        if category.uuid == category_uuid:
            return category.to_dict()
    raise HTTPException(status_code=404, detail="category not found")