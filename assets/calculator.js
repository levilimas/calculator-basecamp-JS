//CalculatorJS <-> version 1.0 <-> Pure JS

function calculator() {
  const operation = Number(prompt('Choose an operation:\n 1 - Sum(+)\n 2 - Subtract(-)\n 3 - Multiplication(*)\n 4 - Real Division(/)\n 5 - Interger Division(%)\n 6 - Potentiation(**)'));

  if (!operation || operation >= 7) {
    alert('Error - Invalid operation');
    calculator();
  } else {
    let n1 = Number(prompt('enter the first value:'));
    let n2 = Number(prompt('enter the second value:'));
    let result;

    if (!n1 || !n2) {
      alert('Error - Invalid parameters');
      calculator();
    } else {
      function sum() {
        result = n1 + n2;
        alert(`The result of the sum of ${n1} + ${n2} = ${result}`);
        newOperation();
      }
      function subtract() {
        result = n1 - n2;
        alert(`The result of the subtract of ${n1} - ${n2} = ${result}`);
        newOperation();
      }
      function multiplication() {
        result = n1 * n2;
        alert(`The result of the multiplication of ${n1} * ${n2} = ${result}`);
        newOperation();
      }
      function reaLDivision() {
        result = n1 / n2;
        alert(`The result of the division of ${n1} / ${n2} = ${result}`);
        newOperation();
      }
      function intergerDivision() {
        result = n1 % n2;
        alert(`the rest of the division of ${n1} % ${n2} = ${result}`);
        newOperation();
      }
      function potentiation() {
        result = n1 + n2;
        alert(`The result of the potentiation of ${n1} elevado a ${n2} = ${result}`);
        newOperation();
      }
  
      function newOperation() {
        let option = prompt('Do you want to do another operation ?\n y - (yes)\n n - (not)');
  
        if (option == 'y') {
          calculator();
        } else if (option == 'n') {
          alert('so see you soon');
        } else {
          alert('Enter a valid option');
          newOperation();
        }
      }
    }

    /*if (operation == 1) {
       sum();
    } else if (operation == 2) {
       subtract();
    } else if (operation == 3) {
        multiplication();
    } else if (operation == 4) {
        realDivision();
    } else if (operation == 5) {
        intergerDivision();
    } else if (operation == 6) {
        potentiation();
    }*/

    switch (operation) {
      case 1: 
        sum();
        break;
      case 2:
        subtract();
        break;
      case 3:
        multimplication();
        break;
      case 4:
        reaLDivision();
        break;
      case 5:
        intergerDivision();
        break;
      case 6:
        potentiation();
        break;

    } 
  }  
}

calculator();