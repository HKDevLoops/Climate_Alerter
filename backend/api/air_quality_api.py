import time

import requests
import geocoder
import dotenv
import os
import json
import pandas as pd
import datetime as dt

dotenv.load_dotenv("apis.env")
air_quality_key_dd = os.environ.get("open_air_pollution_default")
air_pollution_from_too_key = os.environ.get("open_air_quality_from_too")
new_keys = os.environ.get("new_key")
latitude = geocoder.ip("me").latlng[0]
longitude = geocoder.ip("me").latlng[1]


# print(geocoder.ip("me").city)


def air_pollution_forecast(air_quality_key):
    # url_full_day_forecast = f"https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat={latitude}&lon={longitude}&appid={air_quality_key}"
    url_cur = f"https://api.openweathermap.org/data/2.5/air_pollution?lat={latitude}&lon={longitude}&appid={air_quality_key}"
    responses = requests.request("GET", url_cur)
    # responses1 = requests.request("GET", url_full_day_forecast)
    # print(responses.json())
    # print(responses1.json())
    # print(pd.Series(responses1.json())[1])
    return responses.json()


def air_pollution_from(new_key):
    global response
    response_data = {}
    for i in range(7, 0, -1):
        start = dt.datetime.now() - dt.timedelta(days=i)
        end = dt.datetime.now() - dt.timedelta(days=i - 1)
        unixtime_start = int(time.mktime(start.timetuple()))
        unixtime_end = int(time.mktime(end.timetuple()))
        # print(start, end, unixtime_start, unixtime_end)
        url = f"https://api.openweathermap.org/data/2.5/air_pollution/history?lat={latitude}&lon={longitude}&start={unixtime_start}&end={unixtime_end}&appid={new_key}"

        response = requests.request("GET", url)
        response_data[f"{i}"] = response.json()

    # print(pd.DataFrame(response_data).to_json())
    # print(type(pd.DataFrame(response_data).to_json()))
    # print(type(json.dumps(response_data)))
    return json.dumps(response_data)


def air_pollution_from_too(new_key):
    start = dt.datetime.now() - dt.timedelta(days=7)
    end = dt.datetime.now() - dt.timedelta(days=1)
    unixtime_start = int(time.mktime(start.timetuple()))
    unixtime_end = int(time.mktime(end.timetuple()))
    # print(start, end, unixtime_start, unixtime_end)
    url = f"https://api.openweathermap.org/data/2.5/air_pollution/history?lat={latitude}&lon={longitude}&start={unixtime_start}&end={unixtime_end}&appid={new_key}"
    responses = requests.request("GET", url)
    # print(responses.json())
    return responses.json()


if __name__ == '__main__':
    # air_pollution_forecast()
    # air_pollution_from_to()
    air_pollution_from_too()
