const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operator');
const clearBtns = document.querySelectorAll('.clear-btn');
const decimalBtn = document.getElementById('decimal');
const result = document.getElementById('result');
const display = document.getElementById('display');
const plusMinus = document.getElementById('plus-minus');
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  number.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
}

for (var i = 0; i < operations.length; i++) {
  var operationBtn = operations[i];
  operationBtn.addEventListener('click', function (e) {
    operationPress(e.target.textContent);
  });
}

for (var i = 0; i < clearBtns.length; i++) {
  var clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function (e) {
    clear(e.target.textContent);
  });
}

decimalBtn.addEventListener('click', decimal);

plusMinus.addEventListener('click', function (e) {
  plusMinusFunc(e.target.innerText);
});

function numberPress(number) {
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if (display.value === '0') {
      display.value = number;
      if (number !== "0") {
        display.value = number;
      }
    } else {
      display.value += number;
    }
  }
}

function operationPress(op) {

  let localOperationMemory = display.value;
  if (MemoryNewNumber && MemoryPendingOperation !== '=' 
      && MemoryPendingOperation !== "√" &&
      MemoryPendingOperation !== "+/-") {
        display.value = +Math.round(MemoryCurrentNumber * 1000) / 1000;
  
  } else {
    MemoryNewNumber = true;
    if (MemoryPendingOperation === '+') {
      MemoryCurrentNumber += +localOperationMemory;
    } else if (MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= +localOperationMemory;
    } else if (MemoryPendingOperation === '*') {
      MemoryCurrentNumber *= +localOperationMemory;
    } else if (MemoryPendingOperation === '/') {
      MemoryCurrentNumber /= +localOperationMemory;
    } else if (MemoryPendingOperation === 'xn') {
      MemoryCurrentNumber **= +localOperationMemory;
    } else if(op === '√') {
        if(+localOperationMemory < 0){
          return display.value = "Error";
        } else {
          } MemoryCurrentNumber = +Math.sqrt(+localOperationMemory);
    } else {
      MemoryCurrentNumber = +localOperationMemory;
    }
    display.value = +Math.round(MemoryCurrentNumber * 1000000) / 1000000;
    MemoryPendingOperation = op;
  }
}

function plusMinusFunc(sign) {
  if (+display.value > 0) {
    display.value = "-" + +display.value;
  } else {
    display.value = +display.value / -1;
  }
  MemoryNewNumber = false;
}

function decimal(argument) {
  let localDecimalMemory = display.value;

  if (MemoryNewNumber) {
    localDecimalMemory = '0.';
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
      localDecimalMemory += '.';
    }
  }
  display.value = localDecimalMemory;
}

function clear(id) {
  if (id === 'ce') {
    display.value = '0';
    MemoryNewNumber = true;
  } else if (id === 'c') {
    display.value = '0';
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
  }
}
