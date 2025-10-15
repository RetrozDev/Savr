from typing import Optional, List
from src.helpers.client import supabase


class Category:
    def __init__(self, uuid: str, name: str, emoji: str):
        self.uuid = uuid
        self.name = name
        self.emoji = emoji

    @classmethod
    def get_all(cls) -> List["Category"]:
        """get all categories"""
        response = supabase.table("categories").select("*").execute()
        if not response.data:  # type: ignore
            return []
        return [cls.from_dict(item) for item in response.data]  # type: ignore

    @classmethod
    def get_by_uuid(cls, uuid: str) -> Optional["Category"]:
        """get a category by uuid"""
        response = (
            supabase.table("categories").select("*").eq("uuid", uuid).single().execute()
        )
        if not response.data:
            return None
        return cls.from_dict(response.data)  # type: ignore

    @classmethod
    def from_dict(cls, data: dict) -> "Category":
        return cls(
            uuid=data.get("uuid"),  # type: ignore
            name=data.get("name"),  # type: ignore
            emoji=data.get("emoji"),  # type: ignore
        )

    def to_dict(self) -> dict:
        return {
            "uuid": self.uuid,
            "name": self.name,
            "emoji": self.emoji,
        }

    def __repr__(self):
        return f"<Category name='{self.name}' uuid='{self.uuid}'>"
