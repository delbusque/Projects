import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/games'

export const getAll = () => request.get(`${baseUrl}`);

export const createGame = (gameData, accessToken) => fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
        'X-Authorization': accessToken,
        'content-type': 'application/json'
    },
    body: JSON.stringify(gameData)
}).then(data => data.json());