import { injectGlobal } from "styled-components";
import stripUnit from "./helpers/strip-unit";
import { getSlope, getIntercept } from "./helpers/linear-function-helpers";

const setRoot = function({
  minScreenRoot,
  minSizeRoot,
  maxScreenRoot,
  maxSizeRoot
}) {
  if (arguments.length === 0) return { rootLock: true };

  const unitlessMinScreenRoot = stripUnit(minScreenRoot);
  const unitlessMinSizeRoot = stripUnit(minSizeRoot);
  const unitlessMaxScreenRoot = stripUnit(maxScreenRoot);
  const unitlessMaxSizeRoot = stripUnit(maxSizeRoot);

  const DEFAULT_FONT_SIZE = "16px";

  const rootSlope = getSlope({
    x1: unitlessMinScreenRoot,
    y1: unitlessMinSizeRoot,
    x2: unitlessMaxScreenRoot,
    y2: unitlessMaxSizeRoot
  });

  const unitlessRootIntercept = getIntercept({
    slope: rootSlope,
    x: unitlessMinScreenRoot,
    y: unitlessMinSizeRoot
  });

  const rootInterceptPercent =
    unitlessRootIntercept / stripUnit(DEFAULT_FONT_SIZE) * 100;

  injectGlobal`html{
      font-size: ${unitlessMinSizeRoot / stripUnit(DEFAULT_FONT_SIZE) * 100}%;

      @media(min-width: ${minScreenRoot}){
        font-size: calc(${rootSlope * 100}vw + ${rootInterceptPercent}%);
      }

      @media(min-width: ${maxScreenRoot}){
        font-size: ${unitlessMaxSizeRoot / stripUnit(DEFAULT_FONT_SIZE) * 100}%;
      }
    }`;
  // return true;
  return {
    rootLock: {
      unitlessRootIntercept,
      rootSlope,
      unitlessMinSizeRoot,
      unitlessMaxSizeRoot
    }
  };
};

export default setRoot;
