import {capitalize, reverseString} from '../strings.js'

// Test capitalize()
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


// Test reverseString()

test('Reverse three-letter word', () => {
  expect(reverseString('bat')).toBe('tab');
});

test('Reverse palindrome', () => {
  expect(reverseString('racecar')).toBe('racecar');
});

test('Reverse symbols', () => {
  expect(reverseString('!@#$%^&*()')).toBe(')(*&^%$#@!');
});

test('Reverse capitals', () => {
  expect(reverseString('Capital')).toBe('latipaC');
});