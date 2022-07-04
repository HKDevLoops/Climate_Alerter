from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api.open_api import open_weather_api
# App opbject
app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return "HK"


@app.post("/register")
async def get_todo():
    return "Recieved"


@app.get("/aqi")
async def open_weather_api():
    open_weather_api()
