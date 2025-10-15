from supabase import create_client, Client
from src.config.supabase import supabase_config


supabase : Client = create_client(supabase_config["SUPABASE_URL"],supabase_config["SUPABASE_KEY"] )

print(supabase_config["SUPABASE_URL"])