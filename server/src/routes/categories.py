from src.helpers.client import supabase
from fastapi import APIRouter, HTTPException
from typing import List
from src.models.category import Category
router = APIRouter(prefix="/categories", tags=["Categories"])


@router.get("/",response_model=List[dict])
def get_categories():
    response = supabase.table("categories").select("*").execute()
    if not response.data:  # type: ignore
        raise HTTPException(status_code=404, detail="No categories found")
    return  response.data # type: ignore

@router.get("/{uuid}", response_model=dict)
def get_category(uuid: str):
    response = supabase.table("categories").select("*").eq("uuid", uuid).single().execute()
    if not response.data:
        raise HTTPException(status_code=404, detail=f"Category with uuid {uuid} not found")
    return response.data