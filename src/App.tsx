import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [isEmergency, setIsEmergency] = React.useState(false);
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main
        isEmergency={isEmergency}
        handleEmergency={(bool: boolean) => setIsEmergency(bool)}
      />
      <Footer
        isEmergency={isEmergency}
        toggleEmergency={() => setIsEmergency(!isEmergency)}
      />
    </>
  );
};

export default App;
