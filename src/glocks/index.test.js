const { getSlope, getIntercept, getCalc } = require("./index");

const points = {
  x1: 300,
  y1: 16,
  x2: 800,
  y2: 21
};

//getSlope
test("evaluates slope between points (300, 16) and (800, 21)", () => {
  expect(getSlope(points)).toBe(0.01);
});

test("returns slope of number less than one", () => {
  expect(getSlope(points)).toBeLessThan(1);
});

//getIntercept
test("evaluates intercept given slope and x, y pair", () => {
  expect(
    getIntercept({
      slope: getSlope(points),
      x: 300,
      y: 16
    })
  ).toBe(13);
});

test("intercept returns number", () => {
  expect(
    typeof getIntercept({
      slope: getSlope(points),
      x: 300,
      y: 16
    }) === "number"
  ).toBe(true);
});

//getCalc
// test("calc ")
