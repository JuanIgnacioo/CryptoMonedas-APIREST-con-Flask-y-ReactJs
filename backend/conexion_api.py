from requests import Request , Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json

def get_data():
    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
    parameters = {
        'start':'1',
        'limit':'5000',
        'convert':'USD'
                 }
    headers = {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': '39ac2049-c176-484b-81f5-1bd663e479db',
        }

    
    session = Session()
    session.headers.update(headers)

    try:
        response = session.get(url, params=parameters)
        data = json.loads(response.text, parse_int =str, parse_float=str)
        return data['data']
    except (ConnectionError, Timeout, TooManyRedirects) as e:
        return e