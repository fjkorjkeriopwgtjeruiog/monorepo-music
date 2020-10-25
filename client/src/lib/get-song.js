export const getSong = async () => {
  const response = await fetch('/music');
  const data = await response.json();
  return data;
};

export default getSong;
