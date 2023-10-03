function capitalize(string) {
  const firstLetter = string.slice(0, 1).toUpperCase();
  const rest = string.slice(1);
  return String(firstLetter + rest);
}

function reverseString(string) {
  const array = [...string];
  array.reverse();
  return array.join("");
}

export {capitalize, reverseString};