export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/stickers/search?q=${encodeURI(
    category
  )}&limit=10&api_key=TK8NZveu6Z1r2lCe09LEbbSkusAPvqB4`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title || img.username,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
