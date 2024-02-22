class GifKeywordCalculator {
  static excludedWords = [
    "gif",
    "the",
    "and",
    "an",
    "a",
    "i",
    "is",
    "it",
    "of",
    "by",
    "me",
    "my",
    "you",
    "your",
  ];

  static countAndFindMostCommonKeyword(gifTitles) {
    const keywordCounts = this.countTitleKeywords(gifTitles);
    return this.mostCommonKeyword(keywordCounts);
  }

  static countTitleKeywords(gifTitles) {
    return gifTitles.reduce((keywordCounts, title) => {
      title
        .toLowerCase()
        .split(" ")
        .forEach((word) => {
          if (!this.excludedWords.includes(word)) {
            keywordCounts[word] = (keywordCounts[word] || 0) + 1;
          }
        });
      return keywordCounts;
    }, {});
  }

  static mostCommonKeyword(keywordCounts) {
    return Object.entries(keywordCounts).reduce(
      (acc, [keyword, count]) => {
        return count > acc.greatestCount ? { commonKeyword: keyword, greatestCount: count } : acc;
      },
      { commonKeyword: "", greatestCount: 0 }
    );
  }
}

export default GifKeywordCalculator;
