import requests as ress

import requests

url = "https://forecast9.p.rapidapi.com/"

headers = {
	"X-RapidAPI-Key": "edbc9ff912msha49ff4739ed0816p184181jsn80dae3da1b5c",
	"X-RapidAPI-Host": "forecast9.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
