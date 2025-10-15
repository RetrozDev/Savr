from typing import Optional, List
from src.helpers.client import supabase
from src.models.ingredient import Ingredient
from datetime import datetime

class Recipe:
    def __init__(
        self,
        uuid: str,
        name: str,
        category_uuid: str,
        img_src: Optional[str] = None,
        cooking_time: Optional[int] = None,
        steps: Optional[List[str]] = None,
        created_at: Optional[str] = None,
        updated_at: Optional[str] = None,
        ingredients: Optional[List[Ingredient]] = None
    ):
        self.uuid = uuid
        self.name = name
        self.category_uuid = category_uuid
        self.img_src = img_src
        self.cooking_time = cooking_time
        self.steps = steps or []
        self.created_at = created_at
        self.updated_at = updated_at
        self.ingredients = ingredients or []

    @classmethod
    def get_all(cls) -> List["Recipe"]:
        response = supabase.table("recipes").select("*").execute()
        if not response.data:  # type: ignore
            return []

        recipes = []
        for item in response.data:  # type: ignore
            recipe = cls.from_dict(item)  # type: ignore
            recipe.ingredients = Ingredient.get_by_recipe_uuid(recipe.uuid)
            recipes.append(recipe)
        return recipes

    @classmethod
    def get_by_uuid(cls, uuid: str) -> Optional["Recipe"]:
        response = supabase.table("recipes").select("*").eq("uuid", uuid).single().execute()
        if not response.data:  # type: ignore
            return None
        recipe = cls.from_dict(response.data)  # type: ignore
        recipe.ingredients = Ingredient.get_by_recipe_uuid(recipe.uuid)
        return recipe

    @classmethod
    def from_dict(cls, data: dict) -> "Recipe":
        return cls(
            uuid=data.get("uuid"),  # type: ignore
            name=data.get("name"),  # type: ignore
            category_uuid=data.get("category_uuid"),  # type: ignore
            img_src=data.get("img_src"),
            cooking_time=data.get("cooking_time"),
            steps=data.get("steps") or [],
            created_at=data.get("created_at"),
            updated_at=data.get("updated_at")
        )

    def to_dict(self) -> dict:
        return {
            "uuid": self.uuid,
            "name": self.name,
            "category_uuid": self.category_uuid,
            "img_src": self.img_src,
            "cooking_time": self.cooking_time,
            "steps": self.steps,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "ingredients": [i.to_dict() for i in self.ingredients]
        }

    def __repr__(self):
        return f"<Recipe name='{self.name}' uuid='{self.uuid}'>"
