# Morse Mouse

Morse Mouse might save your life when you’re in danger – with it’s shiny flashing (eyes).

Get to know one of monozygotic twins here [Tobis'Mouse](https://morsemouse.tobias-erich.de/) or [Alex'Mouse](https://morsemouse.alexanderruppert.com/).

## Description

With Morse Mouse you can easily en- and de-code Text to and from Morse Code. Very handy when playing with children, spies, army folk or you really need help and there is network reception… Stay tuned for the offline version.

## Motivation

This web app is a friendly cooperation between [Tobias Erich](https://github.com/tobiaserich) and [Alexander Ruppert](https://github.com/aruppert) and a guy we met named Typescript.

## Tech/framework highlights

<b>Built mainly with </b>

- React
- TypeScript
- Emotion
- npm

## Features

General:

- Enter Text and simultaneously see the translation in Morse Code and vice versa
- By pushing the ‘Play’ Button activate the morse light
- The ‘SOS’ directly flashes ‘… --- …’ which one one click
- Text/ Morse Code will play indefinitely in a loop
- Until stopped by the user

## Code Example

```
const morseLight = ({
  morseCodeSplit,
  setLightOn,
  setMorseCodeSplit,
}: MorseLightProps) => {
  const dotFlashLength = 400;
  const dashFlashLength = dotFlashLength * 3;
  const breaks = dotFlashLength;
  const newMorseSplit = [...morseCodeSplit];
  const returnedFirstChar = newMorseSplit.shift();
  switch (returnedFirstChar) {
    case ".":
      setTimeout(() => {
        setLightOn(true);
      }, breaks);
      setTimeout(() => {
        setLightOn(false);
        setMorseCodeSplit(newMorseSplit);
      }, dotFlashLength + breaks);
      break;
    case "-":
      setTimeout(() => {
        setLightOn(true);
      }, breaks);
      setTimeout(() => {
        setLightOn(false);
        setMorseCodeSplit(newMorseSplit);
      }, dashFlashLength + breaks);
      break;
    case " ":
      setTimeout(() => {
        setLightOn(true);
      }, breaks + dashFlashLength);
      setTimeout(() => {
        setLightOn(false);
        setMorseCodeSplit(newMorseSplit);
      }, breaks);
      break;
    case "/":
      setTimeout(() => {
        setLightOn(false);
      }, 7 * dotFlashLength);
      setTimeout(() => {
        setLightOn(true);
        setMorseCodeSplit(newMorseSplit);
      }, breaks);
  }
};
```

## Installation

Clone the repo.
Run:

```
 npm install
```

For a preview:

```
npm run start
```

The app should start either way in your browser (usually on http://localhost:3000)

## License

MIT © Alexander Ruppert & Tobias Erich
