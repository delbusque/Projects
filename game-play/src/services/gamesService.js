const baseUrl = 'http://localhost:3030'

export const getAll = () => fetch(`${baseUrl}/data/games`).then(res => res.json());