class GifWidthCalculator {
  static aggregateGifImageWidths(gifImages) {
    return gifImages.map((image) => {
      return parseInt(image.width);
    });
  }

  static countGifWidth(gifWidths) {
    return gifWidths.reduce((imageWidths, width) => {
      imageWidths[width] = (imageWidths[width] || 0) + 1;
      return imageWidths;
    }, {});
  }

  static mostCommonWidth(widthCounts) {
    const greatestCount = Math.max(...Object.values(widthCounts));
    for (const width in widthCounts) {
      if (widthCounts[width] === greatestCount) {
        return parseInt(width);
      }
    }
  }

  static averageWidth(gifWidths) {
    const reducedWidths = gifWidths.reduce((prev, curr) => prev + curr, 0);
    return reducedWidths / gifWidths.length;
  }

  static gifColumnsPerScreenWidth({ gifWidth, screenWidth }) {
    const MARGIN_SIZE = 10;
    const totalWidthWidthMargin = gifWidth + MARGIN_SIZE;
    let calculatedScreenWidth = screenWidth - MARGIN_SIZE;
    let gifCount = 0;

    while (calculatedScreenWidth >= totalWidthWidthMargin) {
      calculatedScreenWidth -= totalWidthWidthMargin;
      gifCount++;
    }
    return gifCount;
  }
}

export default GifWidthCalculator;
