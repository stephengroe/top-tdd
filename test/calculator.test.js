import calculator from '../calculator';

// Addition
describe('Addition functions', () => {
  test('Add single digits', () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });

  test('Add multiple digits', () => {
    expect(calculator.sum(563829, 6784949)).toBe(7348778);
  });

  test('Add with strings', () => {
    expect(calculator.sum("1", 2)).toBe(3);
  });
});

// Subtraction
describe('Subtraction functions', () => {
  test('Subtract single digits', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });
  
  test('Subtract multiple digits', () => {
    expect(calculator.subtract(5738487, 19384)).toBe(5719103);
  });
  
  test('Subtract with strings', () => {
    expect(calculator.subtract("2", 1)).toBe(1);
  });
});
  
// Multiplication
describe('Multiplication functions', () => {
  test('Multiply single digits', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  
  test('Multiply multiple digits', () => {
    expect(calculator.multiply(2958, 38194)).toBe(112977852);
  });
  
  test('Multiply with strings', () => {
    expect(calculator.multiply("2", 3)).toBe(6);
  });
});

// Division
describe('Division functions', () => {
  test('Divide single digits', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });
  
  test('Divide multiple digits', () => {
    expect(calculator.divide(17295, 283)).toBeCloseTo(61.113);
  });
  
  test('Divide with strings', () => {
    expect(calculator.divide("6", 2)).toBe(3);
  });
});