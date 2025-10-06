from fastapi import FastAPI
from src.routes import recipes, categories

app = FastAPI()
url = 'http//localhost:8000'

@app.get("/")
def root():
    return {"message": "Hello from FastAPI!"}

# include recipes in router
app.include_router(recipes.router)
app.include_router(categories.router)
