const apiURL = process.env.API || `https://covid19.mathdro.id/api`;

export const worldWideData = () => {
    return fetch(apiURL).then(res => res.json()).then(data => data)
}

export const localData = () => {
    return fetch(`${apiURL}/countries/ID`).then(res => res.json()).then(data => data)
}