from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.routes import recipes, categories
from dotenv import load_dotenv
import os

# Charger les variables d'environnement
load_dotenv()

ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "").split(",")  # supporte plusieurs URLs séparées par une virgule
PORT = int(os.getenv("PORT", 8000))

app = FastAPI()

# Middleware CORS pour autoriser seulement certaines origines
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Hello from FastAPI!"}

# Inclure les routers
app.include_router(recipes.router)
app.include_router(categories.router)
