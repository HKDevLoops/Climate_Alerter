import requests
import pandas as pd
import geocoder

latitude = geocoder.ip('me').latlng[0]
longitude = geocoder.ip('me').latlng[1]
print(latitude,longitude)
url = f"https://forecast9.p.rapidapi.com/rapidapi/forecast/{latitude}/{longitude}/hourly/"

headers = {
    "X-RapidAPI-Key": "edbc9ff912msha49ff4739ed0816p184181jsn80dae3da1b5c",
    "X-RapidAPI-Host": "forecast9.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
print(pd.DataFrame(response.json()))
