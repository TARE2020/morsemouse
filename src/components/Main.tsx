import React from "react";
import styled from "@emotion/styled";
type MainProps = {
  isEmergency: boolean;
  handleEmergency: any;
  playbackStart: boolean;
};
type MorseProps = {
  isLightOn: boolean;
  playbackStart?: boolean;
};
const Container = styled.main`
  height: 80%;
  width: 100%;
  background: #d3d3d3;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

const Textarea = styled.textarea`
  width: 80%;
  height: 100%;
  margin-top: 5px;
  border-radius: 5px;
  border-color: #b5b5b5;
  color: #505050;
  box-shadow: inset 3px 3px 3px lightgrey;
`;

const Label = styled.label`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  height: 40%;
`;

const MorseLight = styled("div")<MorseProps>`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: ${({ isLightOn }) => (isLightOn ? "white" : "black")};
  z-index: ${({ playbackStart }) => (playbackStart ? "100" : "-1")};
`;

const Main = ({ isEmergency, handleEmergency, playbackStart }: MainProps) => {
  const [text, setText] = React.useState("");
  const [morseCode, setMorseCode] = React.useState("");
  const [translateTo, setTranslateTo] = React.useState("");
  const [lightOn, setLightOn] = React.useState(false);
  const [morseCodeSplit, setMorseCodeSplit] = React.useState([""]);

  const alphabet: any = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--.."
  };

  const textToMorseCode = () => {
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
      const resultText = resultCharacters.join(" ");
      setMorseCode(resultText);
      return null;
    });
  };

  const morseCodeToText = () => {
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
      const resultText = resultCode.join("");
      setText(resultText);
    });
  };

  const handleChange = (method: string, event: any) => {
    handleEmergency(false);
    setTranslateTo(method);
    const value = event.target.value;
    if (translateTo === "toCode") {
      setText(value);
      let splitMorseCode = morseCode.split("");
      setMorseCodeSplit(splitMorseCode);
    } else if (translateTo === "toText") {
      setMorseCode(value);
    }
  };
  const emergencyMode = () => {
    if (isEmergency) {
      setText("SOS");
      setTranslateTo("toCode");
    } else {
      setText("");
      setMorseCode("");
    }
  };

  const morseLight = () => {
    const dit = 400;
    const dah = dit * 3;
    const breaks = dit;
    const newMorseSplit = [...morseCodeSplit];
    const returnedFirstChar = newMorseSplit.shift();
    if (returnedFirstChar === ".") {
      setTimeout(() => {
        setLightOn(true);
      }, breaks);
      setTimeout(() => {
        setLightOn(false);
        setMorseCodeSplit(newMorseSplit);
      }, dit + breaks);
    } else if (returnedFirstChar === "-") {
      setTimeout(() => {
        setLightOn(true);
      }, breaks);
      setTimeout(() => {
        setLightOn(false);
        setMorseCodeSplit(newMorseSplit);
      }, dah + breaks);
    } else if (returnedFirstChar === " ") {
      setTimeout(() => {
        setLightOn(true);
      }, breaks + dah);
      setTimeout(() => {
        setLightOn(false);
        setMorseCodeSplit(newMorseSplit);
      }, breaks);
    } else if (returnedFirstChar === "/") {
      setTimeout(() => {
        setLightOn(false);
      }, 7 * dit);
      setTimeout(() => {
        setLightOn(true);
        setMorseCodeSplit(newMorseSplit);
      }, breaks);
    }
  };

  React.useEffect(() => {
    if (morseCodeSplit.length === 0) {
      return;
    } else if (morseCodeSplit.length > 0 && playbackStart) {
      morseLight();
    }
  }, [morseCodeSplit, playbackStart]);

  React.useEffect(() => emergencyMode(), [isEmergency]);

  React.useEffect(() => {
    if (translateTo === "toCode") {
      setMorseCode("");
      textToMorseCode();
    } else if (translateTo === "toText") {
      setText("");
      morseCodeToText();
    }
  }, [text, morseCode]);

  return (
    <Container>
      <MorseLight
        isLightOn={lightOn}
        playbackStart={playbackStart}
      ></MorseLight>

      <Label>
        Text
        <Textarea
          value={text}
          onChange={event => {
            handleChange("toCode", event);
          }}
        />
      </Label>
      <Label>
        Morse
        <Textarea
          value={morseCode}
          onChange={event => {
            handleChange("toText", event);
          }}
        />
      </Label>
    </Container>
  );
};

export default Main;
