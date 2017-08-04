import stripUnit from "../helpers/strip-unit";
import { getSlope, getIntercept } from "../helpers/linear-function-helpers";

const getFluidCalc = ({
  minScreen,
  minSize,
  maxScreen,
  maxSize,
  property,
  rootLock = false,
  lockDimension = "vw"
}) => {
  let cssString = `${property}:`;

  // in case of shorthand values
  const minSizeArray = minSize.split(" ");
  const maxSizeArray = maxSize.split(" ");
  for (let i = 0; i < minSizeArray.length; i++) {
    const unit = stripUnit(minScreen, true)[1];

    const slope = getSlope({
      x1: stripUnit(minScreen),
      y1: stripUnit(minSizeArray[i]),
      x2: stripUnit(maxScreen),
      y2: stripUnit(maxSizeArray[i])
    });

    const intercept = getIntercept({
      slope,
      x: stripUnit(minScreen),
      y: stripUnit(minSizeArray[i])
    });

    if (!rootLock) {
      cssString += ` calc(${slope * 100 + lockDimension} + ${intercept +
        unit})`;
    } else {
      const { rootSlope, unitlessRootIntercept } = rootLock;
      const rootInterceptRem = `1rem - ${rootSlope * 100}vw`;
      cssString += `calc(${slope}${lockDimension} + (${rootInterceptRem} + ${intercept -
        unitlessRootIntercept}))`;
    }
  }

  return (cssString += ";");
};

export default getFluidCalc;
