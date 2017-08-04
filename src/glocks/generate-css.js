import getMinCalc from "./css-calcs/get-min-calc";
import getFluidCalc from "./css-calcs/get-fluid-calc";
import getMaxCalc from "./css-calcs/get-max-calc";

const generateCSS = (rootLock, lockObj) => {
  const sortedKeys = Object.keys(lockObj).sort();
  let cssString = ``;

  for (let i = 0; i < sortedKeys.length; i++) {
    const screen = sortedKeys[i];
    const screenNext = sortedKeys[i + 1];
    const rules = lockObj[screen];
    const rulesNext = lockObj[screenNext];
    const cssProps = Object.keys(lockObj[screen]);

    //Min
    if (i === 0) {
      for (let y = 0; y < cssProps.length; y++) {
        cssString += getMinCalc({
          property: cssProps[y],
          size: rules[cssProps[y]],
          rootLock
        });
      }
    }

    //Fluid
    if (i !== sortedKeys.length - 1) {
      cssString += `@media(min-width: ${screen}) {`;

      for (let y = 0; y < cssProps.length; y++) {
        cssString += getFluidCalc({
          property: cssProps[y],
          minScreen: screen,
          maxScreen: screenNext,
          minSize: rules[cssProps[y]],
          maxSize: rulesNext[cssProps[y]]
        });
      }

      cssString += `}`;
    }

    //Max
    if (i === sortedKeys.length - 1) {
      cssString += `@media(min-width: ${screen}) {`;

      for (let y = 0; y < cssProps.length; y++) {
        cssString += getMaxCalc({
          property: cssProps[y],
          size: rules[cssProps[y]],
          rootLock
        });
      }

      cssString += `}`;
    }
  }
  console.log(cssString);
  return cssString;
};

export default generateCSS;

// // checks to make sure there's agreement between propertieserties
// // will need to clean probably
// // throw error
// // will need to check unit agreement
// if(properties.toString() !== propertiesNext.toString()){
//   console.log('sdfsd')
//   return
// }
