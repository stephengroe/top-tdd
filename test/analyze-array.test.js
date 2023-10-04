import analyzeArray from "./analyze-array";

test('Single-digit numbers', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test('Multi-digit numbers', () => {
  expect(analyzeArray([513, 275, 635, 1653, 5939, 42455, 568])).toEqual({
    average: 7434,
    min: 275,
    max: 42455,
    length: 7,
  });
});
