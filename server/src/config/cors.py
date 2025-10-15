from dotenv import load_dotenv
import os

load_dotenv()


cors = {"ALLOWED_ORIGINS": os.getenv("ALLOWED_ORIGINS", "").split(",")}
