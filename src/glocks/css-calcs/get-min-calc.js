import stripUnit from "../helpers/strip-unit";

const getMinCalc = ({ property, size, rootLock = false }) => {
  const sizeArray = size.split(" ");
  let cssString = `${property}: `;

  for (let size of sizeArray) {
    const unit = stripUnit(size, true)[1];

    if (!(rootLock === true && unit === "px")) {
      cssString += size;
    } else {
      const { unitlessMinSizeRoot } = rootLock;
      console.log(unit, size, unitlessMinSizeRoot);
      cssString += `calc( 1rem + ${size - unitlessMinSizeRoot}px )`;
    }
  }
  return (cssString += `;`);
};

export default getMinCalc;
