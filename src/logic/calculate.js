import operate from './operate';

export default function calculate(calculatorData, buttonName) {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operations = ['+', '-', '÷', '×'];
  const modifiers = ['+/-', '%'];

  const isNumber = numbers.includes(buttonName);
  const isOperation = operations.includes(buttonName);
  const isModifier = modifiers.includes(buttonName);

  let { total, next, operation } = calculatorData;

  // Operate total & next using stored operation.
  if (buttonName === '=' && total && next && operation) {
    next = operate(total, next, operation);
    total = null;
    operation = null;

    return { total, next, operation };
  }

  // Clearing state of calculator
  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;

    return { total, next, operation };
  }

  // Appends number
  if (isNumber) {
    if (total && !operation) {
      total = null;
    }

    if (!next) {
      next = buttonName;
    } else {
      next = next === '0' && buttonName === '0' ? next : next + buttonName;
    }

    return { total, next, operation };
  }

  // Storages operation & operates if needed
  if (isOperation) {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
    } else if (next) {
      total = next;
      next = null;
    }
    operation = buttonName;

    return { total, next, operation };
  }

  // Adds point to current number if possible
  if (buttonName === '.' && (total || next)) {
    const addPoint = number => (number.includes('.') ? number : `${number}.`);

    if (total && !next) {
      total = addPoint(total);
    } else {
      next = addPoint(next);
    }

    return { total, next, operation };
  }

  // Applies modifier to current number
  if (isModifier && (total || next)) {
    const reverseSign = number => operate(number, -1, '×');
    const makePercentage = number => operate(number, 100, '÷');

    const modifierFunctions = {
      '+/-': reverseSign,
      '%': makePercentage,
    };
    const modifierFunction = modifierFunctions[buttonName];

    if (total && !next) {
      total = modifierFunction(total);
    } else {
      next = modifierFunction(next);
    }

    return { total, next, operation };
  }

  // Default return
  return calculatorData;
}
