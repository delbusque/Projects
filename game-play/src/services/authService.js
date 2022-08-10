import * as request from "./requester";

const baseUrl = 'http://localhost:3030'

export const login = (email, password) => request.post(`${baseUrl}/users/login`, { email, password });

export const register = (email, password) => request.post(`${baseUrl}/users/register`, { email, password });

export const logout = async (accessToken) => {
    try {
        const responce = await fetch(`${baseUrl}/users/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });

        return responce;
    } catch (error) {
        console.log(error);
    }

};