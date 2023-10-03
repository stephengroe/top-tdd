import capitalize from './strings.js'

test('Capitalize three-letter string',() => {
  expect(capitalize('abc')).toBe('Abc');
});

test('Capitalize one-letter string',() => {
  expect(capitalize('a')).toBe('A');
});

test('Capitalize string with numerals',() => {
  expect(capitalize('1cat2dog')).toBe('1cat2dog');
});

test('Capitalize string with all caps',() => {
  expect(capitalize('DO IT')).toBe('DO IT');
});