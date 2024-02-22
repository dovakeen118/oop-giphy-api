import GifWidthCalculator from "../../src/models/GifWidthCalculator";

describe("GifWidthCalculator", () => {
  const gifs = [
    { height: "267", width: "480" },
    { height: "500", width: "500" },
    { height: "250", width: "480" },
  ];
  const widths = [480, 500, 480];
  const widthCounts = { 480: 2, 500: 1 };

  describe(".aggregateGifImageWidths", () => {
    it("should return the integer width of each gif", () => {
      expect(GifWidthCalculator.aggregateGifImageWidths(gifs).length).toEqual(3);
      expect(GifWidthCalculator.aggregateGifImageWidths(gifs)).toEqual(widths);
    });
  });

  describe(".countGifWidth", () => {
    it("should return an object with the frequency count of each width", () => {
      expect(GifWidthCalculator.countGifWidth(widths)).toEqual(widthCounts);
    });
  });

  describe(".mostCommonWidth", () => {
    it("should return the most frequent gif width ", () => {
      expect(GifWidthCalculator.mostCommonWidth(widthCounts)).toEqual(480);
    });
  });

  describe(".averageWidth", () => {
    it("should return the average width of all gifs", () => {
      expect(GifWidthCalculator.averageWidth(widths)).toEqual(486.6666666666667);
    });
  });

  describe(".gifColumnsPerScreenWidth", () => {
    it("should return the num of gifs to display per row on average 1024px screen", () => {
      expect(
        GifWidthCalculator.gifColumnsPerScreenWidth({ gifWidth: 200, screenWidth: 800 })
      ).toEqual(3);
      expect(
        GifWidthCalculator.gifColumnsPerScreenWidth({ gifWidth: 480, screenWidth: 1024 })
      ).toEqual(2);
    });
  });
});
