const baseUrl = 'https://rest.coinapi.io/v1/exchangerate';
const apiKey = '8160C5C1-31B6-47AE-9C38-5F439C38BAFE';
const apiKeyTwo = '02EB664F-E981-467A-A809-1316518A8FD6';

export const getAll = () => fetch(`${baseUrl}/BTC?invert=false`, {
    method: 'GET',
    headers: {
        'X-CoinAPI-Key': apiKey
    }
}).then(res => res.json())

export const getDouble = (crypto, fiat) => fetch(`${baseUrl}/${crypto}/${fiat}`, {
    method: 'GET',
    headers: {
        'X-CoinAPI-Key': apiKey
    }
}).then(res => res.json())