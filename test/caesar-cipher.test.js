import caesarCipher from "./caesar-cipher";

test('Message +1 shift', () => {
  expect(caesarCipher('defend the east wall of the castle', 1))
    .toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('Alphabet -1 shift', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', -1))
    .toBe('zabcdefghijklmnopqrstuvwxy');
});

test('Alphabet -131 shift', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', -131))
    .toBe('zabcdefghijklmnopqrstuvwxy');
});

test('Alphabet 55 shift', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 55))
    .toBe('defghijklmnopqrstuvwxyzabc');
});

test('26-letter shift', () => {
  expect(caesarCipher('no change', 26))
    .toBe('no change');
});

test('Capital letters, +3', () => {
  expect(caesarCipher('Capital Letters', 3))
    .toBe('Fdslwdo Ohwwhuv');
});

test('Punctuation, +10', () => {
  expect(caesarCipher('Stop, drop, and roll. Now!', 10))
    .toBe('Cdyz, nbyz, kxn byvv. Xyg!');
});