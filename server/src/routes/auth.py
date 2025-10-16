from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from src.helpers.client import supabase
from src.models.user import User
import os

router = APIRouter(prefix="/auth", tags=["Auth"])

FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")


@router.get("/me")
def get_me(token: str):
    """Récupère l'utilisateur depuis un token Supabase"""
    try:
        user = supabase.auth.get_user(token).user
        db_user = User.get_or_create(
            uuid=user.id,
            email=user.email,
            name=user.user_metadata.get("full_name"),
            picture=user.user_metadata.get("avatar_url"),
        )
        return db_user.to_dict()
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")


@router.post("/logout")
def logout(response: JSONResponse):
    response = JSONResponse({"message": "Logged out"})
    response.delete_cookie("access_token")
    return response
