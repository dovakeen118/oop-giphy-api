import got from "got";

import GiphyClient from "../../src/apiClient/GiphyClient";

jest.mock("got");

const gifs = [
  {
    type: "gif",
    title: "Happy Hump Day GIF",
    images: {
      original: { height: "480", width: "480" },
      downsized: { height: "48", width: "48" },
    },
  },
  {
    type: "gif",
    title: "Happy Wednesday Morning GIF",
    images: {
      original: { height: "500", width: "500" },
      downsized: { height: "50", width: "50" },
    },
  },
  {
    type: "gif",
    title: "Flower Rain GIF by James Koroni",
    images: {
      original: { height: "480", width: "480" },
      downsized: { height: "48", width: "48" },
    },
  },
];
const gifImages = [
  {
    original: { height: "480", width: "480" },
    downsized: { height: "48", width: "48" },
  },
  {
    original: { height: "500", width: "500" },
    downsized: { height: "50", width: "50" },
  },
  {
    original: { height: "480", width: "480" },
    downsized: { height: "48", width: "48" },
  },
];

describe("GiphyClient", () => {
  describe(".getTrendingGifs", () => {
    let giphyClient;
    let mockResponse;

    beforeEach(() => {
      giphyClient = new GiphyClient();
      mockResponse = {
        body: JSON.stringify({
          data: gifs,
        }),
      };
      got.mockResolvedValue(mockResponse);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should retrieve trending Gifs from Giphy API", async () => {
      const mockedGifs = await giphyClient.getTrendingGifs();

      expect(mockedGifs).toEqual(gifs);
      expect(mockedGifs.length).toEqual(gifs.length);
    });
  });

  describe(".retrieveGifTitles", () => {
    it("should return all Gif titles", () => {
      expect(GiphyClient.retrieveGifTitles(gifs).length).toEqual(3);
      expect(GiphyClient.retrieveGifTitles(gifs)).toEqual([
        "Happy Hump Day GIF",
        "Happy Wednesday Morning GIF",
        "Flower Rain GIF by James Koroni",
      ]);
    });
  });

  describe(".retrieveGifImages", () => {
    it("should return all possible images for each Gif", () => {
      expect(GiphyClient.retrieveGifImages(gifs).length).toEqual(3);
      expect(GiphyClient.retrieveGifImages(gifs)).toEqual(gifImages);
    });
  });

  describe(".originalGifImages", () => {
    it("should return the original image for all Gifs", () => {
      expect(GiphyClient.originalGifImages(gifImages).length).toEqual(3);
      expect(GiphyClient.originalGifImages(gifImages)).toEqual([
        {
          height: "480",
          width: "480",
        },
        {
          height: "500",
          width: "500",
        },
        {
          height: "480",
          width: "480",
        },
      ]);
    });
  });
});
