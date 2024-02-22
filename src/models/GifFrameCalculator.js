class GifFrameCalculator {
  static getGifsForInternetSpeed({ gifs, internetSpeed }) {
    return gifs.filter((gif) => {
      const gifFrames = parseInt(gif.frames);
      if (gifFrames <= this.getFrameLimit(internetSpeed)) {
        return gif;
      }
    });
  }

  static getFrameLimit(speed) {
    const SPEED_THRESHOLDS = {
      LOW: 60,
      MEDIUM: 135,
      HIGH: 200,
    };
    if (speed <= SPEED_THRESHOLDS.LOW) return 50;
    if (speed <= SPEED_THRESHOLDS.MEDIUM) return 125;
    if (speed < SPEED_THRESHOLDS.HIGH) return 200;
    return 200;
  }
}

export default GifFrameCalculator;
