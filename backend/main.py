from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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
    return "Hello World"


@app.get("/api/todo")
async def get_todo():
    return 1


@app.get("/api/todo{id}")
async def get_todo_by_id(id: str):
    return id


@app.post("/api/todo")
async def post_todo(todo):
    return 1


@app.put(f"/api/todo{id}")
async def put_todo(id, data):
    return id, data


@app.post("/api/todo")
async def post_todo(todo):
    return todo


@app.delete(f"/api/todo{id}")
async def put_todo(id, data):
    return id, data
