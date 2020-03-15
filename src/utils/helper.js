export const angkaKoma = nilai => nilai.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
export const dateFormat = dateString => {
  const date = new Date(dateString);
  return `${date.toLocaleDateString('id-ID')} - ${date.toLocaleTimeString('id-ID')}`;
};
