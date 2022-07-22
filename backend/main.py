import os
import dotenv
import fastapi
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import views.main_views

# App object
app = FastAPI()

origins = ["http://localhost:3000", "https://locahost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def configure():
    app.include_router(router=views.main_views.apps)


configure()
