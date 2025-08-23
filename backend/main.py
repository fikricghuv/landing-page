# backend/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware

# Data model
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
    allow_origins=["*"],  # ganti "*" dengan domain frontend production
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/free-trial")
async def free_trial(request: FreeTrialRequest):
    # Simulasi proses penyimpanan atau email notifikasi
    print(f"New Free Trial Request: {request}")
    return {"message": "Free trial request received successfully."}

@app.post("/get-started")
async def get_started(request: GetStartedRequest):
    # Simulasi proses penyimpanan atau notifikasi
    print(f"New Get Started Request: {request}")
    return {"message": "Get started request received successfully."}
