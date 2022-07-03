import pymongo as pym
import motor

conn = pym.MongoClient("mongodb://hkdevs:uG5SfpNeM5gt2Gh@climate-alert.zsdaw.mongodb.net/?retryWrites=true&w=majority")

db = conn["test"]

# Collection Name
col = db["test"]

x = col.find_one()
print(conn)
print(x)