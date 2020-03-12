type MorseLightProps = {
  morseCodeSplit: any;
  setLightOn: any;
  setMorseCodeSplit: any;
};

export const morseLight = ({
  morseCodeSplit,
  setLightOn,
  setMorseCodeSplit
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
