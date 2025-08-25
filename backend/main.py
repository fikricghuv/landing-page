# backend/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware
import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv() 

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("SUPABASE_URL or SUPABASE_KEY is missing. Please check your .env file.")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
class FreeTrialRequest(BaseModel):
    name: str
    email: EmailStr
    company: str

class GetStartedRequest(BaseModel):
    name: str
    email: EmailStr
    message: str

app = FastAPI(title="Talkvera Landing Page Service API")

# CORS setup (agar bisa diakses dari frontend lain)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/free-trial")
async def free_trial(request: FreeTrialRequest):
    # Simulasi proses penyimpanan atau email notifikasi
    try:
        response = supabase.table("dt_request_demo").insert({
            "full_name": request.name,
            "work_email": request.email,
            "company_name": request.company
        }).execute()
        
        return {"message": "Free trial request stored successfully.", "data": response}
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/get-started")
async def get_started(request: GetStartedRequest):
    # Simulasi proses penyimpanan atau notifikasi
    try:
        response = supabase.table("dt_request_demo").insert({
            "full_name": request.name,
            "work_email": request.email,
            "goal": request.message
        }).execute()

        return {"message": "Get started request stored successfully.", "data": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
