const apiURL = process.env.API || `https://covid19.mathdro.id/api`;

export const worldWideData = () => {
  return fetch(apiURL)
    .then(res => res.json())
    .then(data => data);
};

export const localData = () => {
  return fetch(`${apiURL}/countries/ID`)
    .then(res => res.json())
    .then(data => data);
};

// export const allConfirmedData = () => {
//     fetch(`${apiURL}/confirmed`).then(res => res.json()).then(data => console.table(data))
// }

// export const allRecoveredData = () => {
//     fetch(`${apiURL}/recovered`).then(res => res.json()).then(data => data)
// }

// export const allDeathsData = () => {
//     fetch(`${apiURL}/deaths`).then(res => res.json()).then(data => data)
// }

export const dataTable = () =>
  fetch(`${apiURL}/confirmed`)
    .then(res => res.json())
    .then(data => data);
