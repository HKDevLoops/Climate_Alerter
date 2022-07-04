import requests
import pandas as pd
import geocoder

latitude = geocoder.ip('me').latlng[0]
longitude = geocoder.ip('me').latlng[1]
print(latitude, longitude)


def wetter_api():
    url = f"https://forecast9.p.rapidapi.com/rapidapi/forecast/{latitude}/{longitude}/hourly/"

    headers = {
        "X-RapidAPI-Key": "edbc9ff912msha49ff4739ed0816p184181jsn80dae3da1b5c",
        "X-RapidAPI-Host": "forecast9.p.rapidapi.com"
    }

    response = requests.request("GET", url, headers=headers)

    return response.json()


def open_weather_api():
    url = f"https://api.openweathermap.org/data/2.5/onecall?lat={latitude}&lon={longitude}&exclude=hourly,daily&appid=0e3d1b9d80c6f43a08bbfd0d668b79ca"

    response = requests.request("GET", url)

    print(pd.Series(response.json()))




if __name__ == '__main__':
    open_weather_api()
