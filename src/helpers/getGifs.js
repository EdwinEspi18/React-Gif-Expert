export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=X4uDs4YEaLA16Rvf23L2U5w1J19F3rVe`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gif = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      src: img.images.downsized_medium.url,
    };
  });

  return gif;
};
