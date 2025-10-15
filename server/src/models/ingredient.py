from typing import Optional, List
from src.helpers.client import supabase


class Ingredient:
    def __init__(
        self,
        uuid: str,
        name: str,
        quantity: Optional[str] = None,
        unit: Optional[str] = None,
        recipe_uuid: Optional[str] = None,
    ):
        self.uuid = uuid
        self.name = name
        self.quantity = quantity
        self.unit = unit
        self.recipe_uuid = recipe_uuid

    # --- Récupérer tous les ingrédients ---
    @classmethod
    def get_all(cls) -> List["Ingredient"]:
        response = supabase.table("ingredients").select("*").execute()
        if not response.data:  # type: ignore
            return []
        return [cls.from_dict(item) for item in response.data]  # type: ignore

    # --- Récupérer un ingrédient par UUID ---
    @classmethod
    def get_by_uuid(cls, uuid: str) -> Optional["Ingredient"]:
        response = (
            supabase.table("ingredients")
            .select("*")
            .eq("uuid", uuid)
            .single()
            .execute()
        )
        if not response.data:  # type: ignore
            return None
        return cls.from_dict(response.data)  # type: ignore

    # --- Récupérer tous les ingrédients d'une recette ---
    @classmethod
    def get_by_recipe_uuid(cls, recipe_uuid: str) -> List["Ingredient"]:
        response = (
            supabase.table("ingredients")
            .select("*")
            .eq("recipe_uuid", recipe_uuid)
            .execute()
        )
        if not response.data:  # type: ignore
            return []
        return [cls.from_dict(item) for item in response.data]  # type: ignore

    # --- Utils ---
    @classmethod
    def from_dict(cls, data: dict) -> "Ingredient":
        return cls(
            uuid=data.get("uuid"),  # type: ignore
            name=data.get("name"),  # type: ignore
            quantity=data.get("quantity"),  # type: ignore
            unit=data.get("unit"),  # type: ignore
            recipe_uuid=data.get("recipe_uuid"),  # type: ignore
        )

    def to_dict(self) -> dict:
        return {
            "uuid": self.uuid,
            "name": self.name,
            "quantity": self.quantity,
            "unit": self.unit,
            "recipe_uuid": self.recipe_uuid,
        }

    def __repr__(self):
        return f"<Ingredient name='{self.name}' quantity='{self.quantity}{self.unit}' recipe_uuid='{self.recipe_uuid}'>"
