import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const operations = {
    '+': 'add',
    '-': 'minus',
    '÷': 'div',
    '×': 'times',
  };

  const operator = operations[operation];

  if (operator === 'div' && numberTwo === '0') return null;

  const bigNumberOne = Big(parseFloat(numberOne));
  const bigNumberTwo = Big(parseFloat(numberTwo));

  return bigNumberOne[operator](bigNumberTwo).toString();
}
