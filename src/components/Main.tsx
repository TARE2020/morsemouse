import React from "react";
import styled from "@emotion/styled";
import { textToMorseCode, morseCodeToText } from "../utils/translate";
import { morseLight } from "../utils/morseLight";

type MainProps = {
  isEmergency: boolean;
  handleEmergency: any;
  playbackStart: boolean;
  togglePlayback: any;
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
  color: var(--main-pri);
  box-shadow: inset 3px 3px 3px lightgrey;
`;

const Label = styled.label`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  height: 40%;
  font-size:1.2em;
  font-weight: 600;
  text-transform: uppercase;
 padding: 0 0 1em
`;

const MorseLight = styled("div")<MorseProps>`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: ${({ isLightOn }) => (isLightOn ? "white" : "black")};
  z-index: ${({ playbackStart }) => (playbackStart ? "100" : "-1")};
`;

const ExitButton = styled("button")`
  height: 2em;
  width: 2em;
  position: absolute;
  top: 0;
  right: 0;
  left:0;
  bottom:0;
  margin:auto;
  border-radius: 50%;
  border: none;
  font-weight: 600;
  font-size: 2em;
  background-color: #d3d3d3;
`;


const Main = ({
  isEmergency,
  handleEmergency,
  playbackStart,
  togglePlayback,
}: MainProps) => {
  const [text, setText] = React.useState("");
  const [morseCode, setMorseCode] = React.useState("");
  const [translateTo, setTranslateTo] = React.useState("");
  const [lightOn, setLightOn] = React.useState(false);
  const [morseCodeSplit, setMorseCodeSplit] = React.useState([""]);

  const handleChange = (method: string, event: any) => {
    handleEmergency(false);
    setTranslateTo(method);
    const value = event.target.value;
    if (translateTo === "toCode") {
      setText(value);
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

  React.useEffect(() => {
    if (morseCodeSplit.length === 0) {
      if (playbackStart) {
        togglePlayback(false);
      } else {
        return;
      }
    } else if (morseCodeSplit.length > 0 && playbackStart) {
      morseLight({ morseCodeSplit, setLightOn, setMorseCodeSplit });
    }
  }, [morseCodeSplit, playbackStart]);

  React.useEffect(() => emergencyMode(), [isEmergency]);

  React.useEffect(() => {
    if (translateTo === "toCode") {
      const translatedText: any = textToMorseCode(text);
      setMorseCode("");
      setMorseCode(translatedText);
    } else if (translateTo === "toText") {
      const translatedMorseCode: any = morseCodeToText(morseCode);
      setText("");
      setText(translatedMorseCode);
    }
    let splitMorseCode = morseCode.split("");
    setMorseCodeSplit(splitMorseCode);
  }, [text, morseCode]);

  return (
    <Container>
      <MorseLight
        onClick={() => togglePlayback(false)}
        isLightOn={lightOn}
        playbackStart={playbackStart}
      >
          <ExitButton>X</ExitButton>
      </MorseLight>

      <Label>
        Text
        <Textarea
          value={text}
          onChange={(event) => {
            handleChange("toCode", event);
          }}
        />
      </Label>
      <Label>
        Morse
        <Textarea
          value={morseCode}
          onChange={(event) => {
            handleChange("toText", event);
          }}
        />
      </Label>
    </Container>
  );
};

export default Main;
