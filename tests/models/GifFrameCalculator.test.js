import GifFrameCalculator from "../../src/models/GifFrameCalculator";

const gifs = [
  { height: "267", width: "480", frames: "57" },
  { height: "500", width: "500", frames: "120" },
  { height: "270", width: "480", frames: "50" },
  { height: "400", width: "480", frames: "17" },
  { height: "450", width: "450", frames: "112" },
];

describe("GifFrameCalculator", () => {
  describe(".getGifsForInternetSpeed", () => {
    it("should return gifs in the low internet speed range", () => {
      const lowSpeedGifs = GifFrameCalculator.getGifsForInternetSpeed({ gifs, internetSpeed: 60 });

      expect(lowSpeedGifs.length).toEqual(2);
      expect(lowSpeedGifs).toEqual([
        { height: "270", width: "480", frames: "50" },
        { height: "400", width: "480", frames: "17" },
      ]);
    });

    it("should return gifs in the high internet speed range", () => {
      const highSpeedGifs = GifFrameCalculator.getGifsForInternetSpeed({
        gifs,
        internetSpeed: 135,
      });

      expect(highSpeedGifs.length).toEqual(5);
      expect(highSpeedGifs).toEqual(gifs);
    });
  });
});
