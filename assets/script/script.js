const numberBtn = document.querySelectorAll('.number_btn');
const AC = document.getElementById('AC');
const plusOrMinus = document.getElementById('plus_or_minus');
const percentage = document.getElementById('percentage');
const operationBtn = document.querySelectorAll('.operations');
const equals = document.getElementById('equals');
const currentOperand = document.querySelector('#current_operand span');
const previousOperand = document.querySelector('#previous_operand span');

let currentOperation = '';

allClear();

// Clear the calculator
function allClear() {
  currentOperand.textContent = '';
  previousOperand.textContent = '';
  currentOperation = '';
}

// Append number to screen when number button pressed
 function appendNumber(number) {
   if (number == '.' && currentOperand.textContent.includes('.')) {
     return;
   }
   (currentOperand.textContent += number).toString;
   if (
     currentOperand.textContent[0] == '0' &&
     currentOperand.textContent[1] == '0'   ) {
     currentOperand.textContent = '0';
   }
 }

// Update operation
function updateOperation(operation) {
  currentOperation = operation;
  if (currentOperand.textContent !== '' && previousOperand.textContent !== '') {
    return;
  }
  if (currentOperand.textContent !== '') {
    previousOperand.textContent = currentOperand.textContent;
    currentOperand.textContent = '';
  }
}

// Perform calculation and update display
function calculate() {
  let result = '';
  let b = Number(currentOperand.textContent);
  let a = Number(previousOperand.textContent);
  console.log(a, b, currentOperation);

  switch (currentOperation) {
    case 'plus':
      result = a + b;
      break;
    case 'minus':
      result = a - b;
      break;
    case 'times':
      result = a * b;
      break;
    case 'division':
      result = a / b;
      break;
    case 'percentage':
      result = a * (b / 100);
      break;
  }
  currentOperand.textContent = result;
  previousOperand.textContent = '';
  currentOperation = 'equals';
}

// Change the sign of currentOperand
function changeSign() {
  let b = Number(currentOperand.textContent);
  if (b >= 0) {
    currentOperand.textContent = '-' + currentOperand.textContent;
  } else {
    currentOperand.textContent = currentOperand.textContent.substring(1);
  }
}

// EVENT LISTENERS
AC.addEventListener('click', allClear);

//number buttons
 numberBtn.forEach((button) => {
   button.addEventListener('click', () => {
     if (currentOperation === 'equals') {
      allClear();
       appendNumber(button.textContent);
     } else {
       appendNumber(button.textContent);
     }
   });
 });

//operation buttons
operationBtn.forEach((button) => {
  button.addEventListener('click', () => {
    updateOperation(button.id);
  });
});

//equals button
equals.addEventListener('click', () => {
  calculate();
});

//plusorMinus button
plusOrMinus.addEventListener('click', () => {
  changeSign();
});
