export default function analyzeArray(array) {
  const object = {};
  object.average = array.reduce((acc, num) => acc += num) / array.length;
  object.min = Math.min(...array);
  object.max = Math.max(...array);
  object.length = array.length;

  return object;
};