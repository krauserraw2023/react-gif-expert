export class GifsService {
  static async get(category, limit = 20) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${`nrp65McinE1Gc03tIVwywHnNcpSjb5v8`}&limit=${limit}&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    return gifs;
  }
}
