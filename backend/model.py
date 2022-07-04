from pydantic import BaseModel

class Todo(BaseModel):
    title: str
    description: str
    
class Login(BaseModel):
    username: str
    password: str
    
class Register(Basemodel):
    username: str
    password : str
    email:  str
    number: str