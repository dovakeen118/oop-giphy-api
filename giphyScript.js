import GiphyClient from "./src/apiClient/GiphyClient.js";
import GifFrameCalculator from "./src/models/GifFrameCalculator.js";
import GifKeywordCalculator from "./src/models/GifKeywordCalculator.js";
import GifWidthCalculator from "./src/models/GifWidthCalculator.js";

const giphyClient = new GiphyClient();
const gifs = await giphyClient.getTrendingGifs();

// Trending GIF Titles : Most common keyword
const gifTitles = GiphyClient.retrieveGifTitles(gifs);
const { commonKeyword, greatestCount } =
  GifKeywordCalculator.countAndFindMostCommonKeyword(gifTitles);

console.log(`Most Common Trending Keyword, ${commonKeyword} appears # ${greatestCount} times`);

// GIF Size
const gifImages = GiphyClient.retrieveGifImages(gifs);
const originalGifs = GiphyClient.originalGifImages(gifImages);
const gifWidths = GifWidthCalculator.aggregateGifImageWidths(originalGifs);

// GIF Size : most common original width
const widthCounts = GifWidthCalculator.countGifWidth(gifWidths);
const mostCommonWidth = GifWidthCalculator.mostCommonWidth(widthCounts);
console.log("\nMost Common Original GIF width: ", mostCommonWidth);

// GIF Size : average original width
const averageWidth = GifWidthCalculator.averageWidth(gifWidths);
console.log("Average Original GIF width: ", averageWidth);

// GIF Size : num common width GIFs per screen
const numCommonWidth = GifWidthCalculator.gifColumnsPerScreenWidth({
  gifWidth: mostCommonWidth,
  screenWidth: 1024,
});
console.log("Number of Most Common GIF widths per Average Screen: ", numCommonWidth);

// GIF Size : average width GIFs per screen
const numAverageWidth = GifWidthCalculator.gifColumnsPerScreenWidth({
  gifWidth: averageWidth,
  screenWidth: 1024,
});
console.log("Number of Average GIF widths per Average Screen: ", numAverageWidth);

// GIF Frames
const LOW_SPEED = 60;
const MEDIUM_SPEED = 135;
const HIGH_SPEED = 200;

// GIF Frames : low internet speed
const lowSpeedGifs = GifFrameCalculator.getGifsForInternetSpeed({
  gifs: originalGifs,
  internetSpeed: LOW_SPEED,
});
console.log("\nLow Internet Speed GIF count: ", lowSpeedGifs.length);

// GIF Frames : GIF rows for LOW speed
const lowSpeedGifWidths = GifWidthCalculator.aggregateGifImageWidths(lowSpeedGifs);
const averageLowSpeedWidth = GifWidthCalculator.averageWidth(lowSpeedGifWidths);
const numLowSpeedAverageWidth = GifWidthCalculator.gifColumnsPerScreenWidth({
  gifWidth: averageLowSpeedWidth,
  screenWidth: 1024,
});
console.log("Number of Low Speed GIFs per Average Screen: ", numLowSpeedAverageWidth);

// GIF Frames : medium internet speed
const mediumSpeedGifs = GifFrameCalculator.getGifsForInternetSpeed({
  gifs: originalGifs,
  internetSpeed: MEDIUM_SPEED,
});
console.log("Medium Internet Speed GIF count: ", mediumSpeedGifs.length);

// GIF Frames : GIF rows for MED speed
const medSpeedGifWidths = GifWidthCalculator.aggregateGifImageWidths(mediumSpeedGifs);
const averageMedSpeedWidth = GifWidthCalculator.averageWidth(medSpeedGifWidths);
const numMedSpeedAverageGifWidth = GifWidthCalculator.gifColumnsPerScreenWidth({
  gifWidth: averageMedSpeedWidth,
  screenWidth: 1024,
});
console.log("Number of Medium Speed GIFs per Average Screen: ", numMedSpeedAverageGifWidth);

// GIF Frames : high internet speed
const highSpeedGifs = GifFrameCalculator.getGifsForInternetSpeed({
  gifs: originalGifs,
  internetSpeed: HIGH_SPEED,
});
console.log("High Internet Speed GIF count: ", highSpeedGifs.length);

// GIF Frames : GIF rows for HIGH speed
const highSpeedGifWidths = GifWidthCalculator.aggregateGifImageWidths(highSpeedGifs);
const averageHighSpeedWidth = GifWidthCalculator.averageWidth(highSpeedGifWidths);
const numHighSpeedAverageGifWidth = GifWidthCalculator.gifColumnsPerScreenWidth({
  gifWidth: averageHighSpeedWidth,
  screenWidth: 1024,
});
console.log("Number of High Speed GIFs per Average Screen: ", numHighSpeedAverageGifWidth);
