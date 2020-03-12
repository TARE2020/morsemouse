import alphabet from "../utils/alphabet";

export const textToMorseCode = (text: string) => {
  const inputValue = text.split("");
  let resultCharacters: any = [];
  inputValue.map((character: string) => {
    const upperCaseCharacter: string = character.toUpperCase();
    const preparedCharacter: number = upperCaseCharacter.charCodeAt(0);
    if (character === " ") {
      resultCharacters.push("/");
    } else if (preparedCharacter > 64 && preparedCharacter < 91) {
      resultCharacters.push(alphabet[upperCaseCharacter]);
    }
  });
  const resultText = resultCharacters.join(" ");
  return resultText;
};

export const morseCodeToText = (morseCode: string) => {
  const inputValue = morseCode.split(" ");
  let resultCode: any = [];
  inputValue.map((codeFragment: string) => {
    if (codeFragment === " ") {
      resultCode.push("");
    } else if (codeFragment === "/") {
      resultCode.push(" ");
    } else if (inputValue) {
      const translatedCodeFragment = Object.keys(alphabet).find(
        key => alphabet[key] === codeFragment
      );
      resultCode.push(translatedCodeFragment);
    }
  });
  const resultText = resultCode.join("");
  return resultText;
};
