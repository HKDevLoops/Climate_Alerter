import fastapi
import dotenv
import os
apps = fastapi.APIRouter()
dotenv.load_dotenv("../api/apis.env")
new_key = os.environ.get("new_key")


@apps.get('/api')
async def sample(obj: cit):
    return {"sample": obj}


@apps.get("/aqi")
async def open_air_pollution_api():
    return air_pollution_from_too(new_key)
    # return api.air_quality_api.air_pollution_from()
    # latitude = geocoder.ip('me').latlng[0]
    # longitude = geocoder.ip('me').latlng[1]
    # # response_data = {}
    # #
    # start = dt.datetime.now() - dt.timedelta(days=7)
    # end = dt.datetime.now() - dt.timedelta(days=1)
    # unixtime_start = int(time.mktime(start.timetuple()))
    # unixtime_end = int(time.mktime(end.timetuple()))
    # # print(start, end, unixtime_start, unixtime_end)
    # url = f"https://api.openweathermap.org/data/2.5/air_pollution/history?lat={latitude}&lon={longitude}&start={unixtime_start}&end={unixtime_end}&appid={new_key}"
    #
    # response = requests.request("GET", url)
    # # response_data[f"{i}"] = response.json()
    #
    # # print(pd.DataFrame(response_data).to_json())
    # # print(type(pd.DataFrame(response_data).to_json()))
    # # print(type(json.dumps(response_data)))
    # return response.json()
    # return api.open_api.open_weather_api()


@apps.get("/weather")
async def opens_weather_api():
    return open_weather_api()


@apps.get("/aqi/air")
async def air_quality_api_call():
    air_pol = air_pollution_forecast(new_key)

    return air_pol
