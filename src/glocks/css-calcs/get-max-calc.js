import stripUnit from "../helpers/strip-unit";

const getMaxCalc = ({ property, size, rootLock = false }) => {
  const sizeArray = size.split(" ");
  let cssString = `${property}: `;

  for (let size of sizeArray) {
    const unit = stripUnit(size, true)[1];

    if (!(rootLock === true && unit === "px")) {
      cssString += size;
    } else {
      const { unitlessMaxSizeRoot } = rootLock;
      cssString += `calc( 1rem + ${size - unitlessMaxSizeRoot}px )`;
    }
  }

  return (cssString += `;\n`);
};

export default getMaxCalc;
