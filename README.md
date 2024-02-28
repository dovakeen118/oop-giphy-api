# Giphy Coding Challenge

This application uses the `got` library to request GIFs from the Giphy API. Using Object Oriented Programming, information is calculated about the GIFs retrieved and output to the terminal.

## Installation

Install necessary dependencies with `yarn`:

```sh
yarn install
```

Once installed, run the terminal script using the following command:

```sh
node giphyScript.js
```

## Usage

Use the `.env.example` to set up the necessary API key credentials and base URL to the Giphy API to make requests.

_Please see `giphyScript.js` for example functionality_.

### Trending GIF Titles

Evaluate the titles of trending GIFs to find the most common keyword in the title. _Excluding the word "GIF" and articles such as [the, and, an, a, I, is, it, of, by, me, my, you, your]_

### GIF Size

Analyze the widths of "original" sized GIFs to generate recommendations for how many GIFs can be displayed on a screen. Using an average screen size, of 1024×768px, with a margin of 10px between each GIF:

1. Determine the number of columns needed to display GIFs side by side if all GIFs are the _most common_ width
2. Determine the number of columns needed to display GIFs side by side using the _average_ GIF width

### GIF Frames

Assess which "original" sized GIFs to display based on the number of frames and internet connection and following the criteria below:

- When the internet speed is low (60 mbs), return GIFs that have fewer than 50 frames
- When the internet speed is medium (135 mbs), return GIFs that have 125 frames or fewer
- When the internet is high (200 mbs), return GIFs up to 200 frames or fewer
- GIFs with more than 200 frames are excluded, regardless of internet speed

Recommend which GIFs to display based on each internet speed range, then use the average width to suggest how many columns of GIFs we will need to generate to display all of the GIFs on an average screen.
