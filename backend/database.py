from model import Todo

# Mongo driver

import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb+srv://hkdevs:uG5SfpNeM5gt2Gh@climate-alert.zsdaw.mongodb.net/?retryWrites=true&w=majority")
database = client.TodoList