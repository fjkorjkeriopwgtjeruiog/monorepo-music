export const getAllMusic = async () => {
  const response = await fetch('/music');
  const data = await response.json();
  return data;
};
export const createNewMusic = async (cantos, response) => {
  // Traducimos a JSON y pasamos la página a POST.
  await fetch('/music', {
    method: 'POST',
    body: JSON.stringify(cantos),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
};
