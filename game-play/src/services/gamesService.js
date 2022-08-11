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

export const deleteGame = (gameId, accessToken) => fetch(`${baseUrl}/${gameId}`, {
    method: 'DELETE',
    headers: {
        'X-Authorization': accessToken
    }
}).then(data => data.json());

export const editGame = (gameId, accessToken, newData) => fetch(`${baseUrl}/${gameId}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json',
        'X-Authorization': accessToken,
    },
    body: JSON.stringify(newData)
}).then(data => data.json());