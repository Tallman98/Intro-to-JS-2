function solveCalc(selection) {
    switch(selection) {
        case '1': {
            const valueOne = prompt('First number:');
            const valueTwo = prompt('Second number:');
            alert(`Your answer is ${add(Number(valueOne), Number(valueTwo))}`)
            if (confirm("Would you like to perform another calculation?")) {
                calculate()
            }
            break;
            
        }
        case '2': {
            const valueOne = prompt('First number:');
            const valueTwo = prompt('Second number:');
            alert(`Your answer is ${subtract(valueOne, valueTwo)}`)
            if (confirm("Would you like to perform another calculation?")) {
                calculate()
            }
            break;
        }
        case '3': {
            const valueOne = prompt('First number:');
            const valueTwo = prompt('Second number:');
            alert(`Your answer is ${multiply(valueOne, valueTwo)}`)
            if (confirm("Would you like to perform another calculation?")) {
                calculate()
            }
            break;
        }
        case '4': {
            const valueOne = prompt('First number:');
            const valueTwo = prompt('Second number:');
            alert(`Your answer is ${divide(valueOne, valueTwo)}`)
            if (confirm("Would you like to perform another calculation?")) {
                calculate()
            }
            break;
        }
        default:
            alert('Make sure your selection ranges between 1 and 4');
            calculate();
    }
}

function calculate() {
    const selection = prompt(`
        1. Add
        2. Subtract
        3. Multiply
        4. Divide

        Enter number 1/2/3/4:
    `);

    solveCalc(selection);
}

calculate();


//Define my functions
//This function adds two numbers
// function add(numbers) {
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++) {
//         sum = sum + Number(numbers[i])
//     }
//     return sum
// }


function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

