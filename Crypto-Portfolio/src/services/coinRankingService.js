const baseUrl = 'https://coinranking1.p.rapidapi.com';

const apiKey = 'c65aadff23msh64bfc0af4c1b8e1p1da5c6jsn8b2876152e0f';
const apiHost = 'coinranking1.p.rapidapi.com';

export const getAll = () => fetch(`${baseUrl}/coins`, {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost
    }
}).then(res => res.json())