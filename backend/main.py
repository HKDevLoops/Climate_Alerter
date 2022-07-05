from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import api.air_quality_api
import api.open_api
import json
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
    return json.dumps(api.open_api.open_weather_api())


@app.get("/aqi/air")
async def air_quality_api_call():
    air_pol = api.air_quality_api.air_pollution_forecast()
    return air_pol
