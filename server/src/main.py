import os
from fastapi import Request, HTTPException, Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import jwt
from starlette.middleware.sessions import SessionMiddleware

from src.routes import recipes, categories, auth
from src.config.cors import cors

SECRET_KEY = os.getenv("JWT_SECRET")  # Pour JWT

app = FastAPI()

# Middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors["ALLOWED_ORIGINS"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Middleware session (nécessaire pour Authlib)
app.add_middleware(SessionMiddleware, secret_key=str(os.getenv("SESSION_SECRET")))

# Routers
app.include_router(recipes.router)
app.include_router(categories.router)

@app.get("/")
def root():
    return {"message": "Hello from FastAPI!"}
