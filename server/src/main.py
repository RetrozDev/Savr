from fastapi import FastAPI
from src.routes import recipes

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello from FastAPI!"}

# include recipes in router
app.include_router(recipes.router)
