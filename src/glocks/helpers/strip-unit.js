export default function stripUnit(value, returnUnit) {
  const unitlessValue = parseFloat(value);

  if (returnUnit) {
    const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
    if (typeof value === "number" || !value.match(cssRegex)) return [value, ""];
    return [unitlessValue, value.match(cssRegex)[2]];
  } else {
    if (isNaN(unitlessValue)) return value;
    return unitlessValue;
  }
}
