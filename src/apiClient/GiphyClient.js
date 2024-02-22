import dotenv from "dotenv";
import got from "got";

dotenv.config();

class GiphyClient {
  constructor() {
    this.apiKey = process.env.GIPHY_API_KEY;
    this.baseURL = process.env.BASE_URL;
  }

  async getTrendingGifs() {
    const response = await got(`${this.baseURL}/trending?api_key=${this.apiKey}`);
    const { data } = await this.parseGiphyResponse(response);
    return data;
  }

  parseGiphyResponse(response) {
    return JSON.parse(response.body);
  }

  static retrieveGifTitles(gifs) {
    return gifs.map((gif) => {
      return gif.title;
    });
  }

  static retrieveGifImages(gifs) {
    return gifs.map((gif) => {
      return gif.images;
    });
  }

  static originalGifImages(gifImages) {
    return gifImages.map((gif) => {
      return gif.original;
    });
  }
}

export default GiphyClient;
