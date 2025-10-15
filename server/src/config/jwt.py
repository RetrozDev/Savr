from dotenv import load_dotenv
import os

load_dotenv()

jwt_config = {"SECRET_KEY": os.getenv("JWT_SECRET")}
