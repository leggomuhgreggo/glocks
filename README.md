#Glocks

A styled-components mixin for really good css-locks

------

Basic Usage:
```js

const theme = {
  primary: "rebeccapurple",
  glocks: glockSettings
};

const Component = styled(Copy)`
  ${glocks("font-size", 14, 30)}
  color: blue;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Component />
        </ThemeProvider>
      </div>
    );
  }
}
```

Usage with root lock and ThemeComponent:
```js
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

const Component = styled(Copy)`
  ${glocks("font-size", 14, 30)}
  color: blue;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Component />
        </ThemeProvider>
      </div>
    );
  }
}
```
