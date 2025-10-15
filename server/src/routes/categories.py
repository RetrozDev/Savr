from fastapi import APIRouter, HTTPException
from typing import List
from src.models.category import Category

router = APIRouter(prefix="/categories", tags=["Categories"])

@router.get("/", response_model=List[dict])
def get_categories():
    categories = Category.get_all()
    if not categories:
        raise HTTPException(status_code=404, detail="No categories found")
    return [c.to_dict() for c in categories]


@router.get("/{uuid}", response_model=dict)
def get_category(uuid: str):
    category = Category.get_by_uuid(uuid)
    if not category:
        raise HTTPException(status_code=404, detail=f"Category {uuid} not found")
    return category.to_dict()
