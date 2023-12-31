export default function caesarCipher(string, shift) {
  let array = [...string];
  const justLetters = new RegExp('^[A-Za-z]+$');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // For shifts beyond a full rotation, like 37 or -133
  if (Math.abs(shift) >= 26) shift = shift % 26;

  const cipherText = array.reduce((phrase, letter) => {
    if(justLetters.test(letter)) {
      let letterIndex = alphabet.indexOf(letter.toLowerCase());
      letterIndex += shift;

      // Fix if extends beyond the alphabet
      if (letterIndex >= 26) {
        letterIndex -= 26;
      } else if (letterIndex < 0) {
        letterIndex += 26;
      }

      // Make uppercase if necessary
      if (letter === letter.toUpperCase()) {
        return phrase.concat((alphabet[letterIndex]).toUpperCase());
      }
      return phrase.concat(alphabet[letterIndex]);
    }
    return phrase.concat(letter);
  }, '');

  return cipherText;
}