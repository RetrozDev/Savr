from typing import List
from src.models.ingredient import Ingredient

class Recipe :
    def __init__(self, uuid: str, name: str, categoryUuid: str, imgSrc: str, cookingTime: int, ingredients: List[Ingredient], steps: List[str]):
        self.uuid = uuid
        self.name = name
        self.categoryUuid = categoryUuid
        self.imgSrc = imgSrc
        self.cookingTime = cookingTime
        self.ingredients = ingredients
        self.steps = steps

    def to_dict(self):
        return {
            "uuid": self.uuid,
            "name": self.name,
            "categoryUuid": self.categoryUuid,
            "imgSrc": self.imgSrc,
            "cookingTime": self.cookingTime,
            "ingredients": [ing.to_dict() for ing in self.ingredients],
            "steps": self.steps
        }
