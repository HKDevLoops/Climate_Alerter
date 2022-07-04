import requests
import geocoder
import dotenv
import os
import pandas as pd

dotenv.load_dotenv("apis.env")
air_quality = os.environ.get("open_weather_one_call")
latitude = geocoder.ip("me").latlng[0]
longitude = geocoder.ip("me").latlng[1]
print(geocoder.ip("me").city)


def air_pollution_forecast():
    url_full_day_forecast = f"https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat={latitude}&lon={longitude}&appid={air_quality}"
    url_cur = f"https://api.openweathermap.org/data/2.5/air_pollution?lat={latitude}&lon={longitude}&appid={air_quality}"
    responses = requests.request("GET", url_cur)
    responses1 = requests.request("GET", url_full_day_forecast)
    print(responses.json())
    print(responses1.json())
    print(pd.Series(responses1.json())[1])
    return responses.json()


if __name__ == '__main__':
    air_pollution_forecast()
