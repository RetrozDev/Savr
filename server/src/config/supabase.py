from dotenv import load_dotenv
import os

load_dotenv()

supabase_config = {
    "SUPABASE_URL": os.getenv("SUPABASE_URL") or "unknown",
    "SUPABASE_KEY": os.getenv("SUPABASE_KEY") or "unknown"
}