/*
To Do:
- use with range
- styled-components agnostic
- use with units
- filter CSS Properties
- error handling and warnings
- testing
*/

// import normalizeShape from "normalize-shape";
import generateCSS from "./generate-css";
import setRoot from "./set-root";
import setDefaults from "./set-defaults";

const DEFAULTS = {
  minScreen: 400,
  maxScreen: 900,
  minFont: 16,
  maxFont: 21
};

const glocks = (...args) => {
  return props => {
    // get glocks from theme prop
    const { glocks } = props.theme;
    const settings = {
      ...DEFAULTS,
      ...glocks
    };

    console.log(settings);

    //normalize shape from API usages
    // const glockObj = normalizeShape(args, settings);

    const glockObj = {
      "300px": {
        "font-size": "16px"
      },
      "900px": {
        "font-size": "21px"
      }
    };
    const rootLock = false;
    return generateCSS(rootLock, glockObj);
  };
};

// called early within ThemeProvider
// export setRoot;
// export fluidSize

export { setRoot, setDefaults, glocks as default };
