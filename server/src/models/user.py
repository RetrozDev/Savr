from typing import Optional
from src.helpers.client import supabase

class User:
    def __init__(self, uuid: str, email: str, name: str, picture: Optional[str] = None):
        self.uuid = uuid
        self.email = email
        self.name = name
        self.picture = picture

    @classmethod
    def get_or_create(cls, uuid: str, email: str, name: str, picture: Optional[str] = None) -> "User":
        existing = supabase.table("users").select("*").eq("uuid", uuid).single().execute()
        if existing.data:
            return cls.from_dict(existing.data)

        data = {
            "uuid": uuid,
            "email": email,
            "name": name,
            "picture": picture,
        }
        inserted = supabase.table("users").insert(data).execute()
        return cls.from_dict(inserted.data[0])

    @classmethod
    def from_dict(cls, data: dict) -> "User":
        return cls(
            uuid=data.get("uuid"),
            email=data.get("email"),
            name=data.get("name"),
            picture=data.get("picture"),
        )

    def to_dict(self) -> dict:
        return {
            "uuid": self.uuid,
            "email": self.email,
            "name": self.name,
            "picture": self.picture,
        }

    def __repr__(self):
        return f"<User {self.email}>"
