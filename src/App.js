import React, { Component } from "react";

import styled, { ThemeProvider } from "styled-components";
import glocks, { setRoot, setDefaults } from "./glocks/index";

import Copy from "./components/Copy.js";

let rootConfig = {
  minScreenRoot: "400px",
  minSizeRoot: "16px",
  maxScreenRoot: "1000px",
  maxSizeRoot: "21px"
};

let defaultConfig = {
  minScreen: 400,
  maxScreen: 900,
  minFontSize: 16,
  maxFontSize: 21
};

const glockSettings = {
  ...setRoot(rootConfig),
  ...setDefaults(defaultConfig)
};

const theme = {
  primary: "rebeccapurple",
  glocks: glockSettings
};

const StyledCopy = styled(Copy)`
  ${glocks("font-size", 14, 30)}
  color: blue;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <StyledCopy />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
