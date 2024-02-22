import GifKeywordCalculator from "../../src/models/GifKeywordCalculator";

const gifTitles = [
  "I Love You Heart GIF",
  "Happy Birthday GIF",
  "Ha Ha Lol GIF",
  "Happy Birthday Cake GIF by Birthday Bot",
];

describe("GifKeywordCalculator", () => {
  describe(".countAndFindMostCommonKeyword", () => {
    it("should return the highest counted keyword with its count", () => {
      expect(GifKeywordCalculator.countAndFindMostCommonKeyword(gifTitles)).toEqual({
        commonKeyword: "birthday",
        greatestCount: 3,
      });
    });

    it("should return a keyword when all equal counts", () => {
      const equalKeywordCountTitles = ["I Love You Heart GIF", "Happy Birthday GIF"];
      expect(GifKeywordCalculator.countAndFindMostCommonKeyword(equalKeywordCountTitles)).toEqual({
        commonKeyword: "love",
        greatestCount: 1,
      });
    });

    it("should not return an excluded word", () => {
      const doubleExcluded = GifKeywordCalculator.excludedWords.concat(
        GifKeywordCalculator.excludedWords
      );
      expect(GifKeywordCalculator.countAndFindMostCommonKeyword(doubleExcluded)).toEqual({
        commonKeyword: "",
        greatestCount: 0,
      });
    });
  });
});
