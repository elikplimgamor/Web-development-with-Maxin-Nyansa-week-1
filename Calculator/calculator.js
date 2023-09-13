document.addEventListener('DOMContentLoaded', function () {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.calc-button');

    let currentInput = '';
    let currentOperator = '';
    let firstOperand = null;
    let shouldResetScreen = false;

    // Helper function to update the screen
    function updateScreen() {
        screen.textContent = currentInput;
    }

    // Helper function to handle number button clicks
    function handleNumberClick(value) {
        if (shouldResetScreen) {
            currentInput = '';
            shouldResetScreen = false;
        }
        currentInput += value;
        updateScreen();
    }

    // Helper function to handle operator button clicks
    function handleOperatorClick(operator) {
        if (currentOperator !== '') {
            handleEqualsClick();
        }
        firstOperand = parseFloat(currentInput);
        currentInput = '';
        currentOperator = operator;
    }

    // Helper function to handle equals button click
    function handleEqualsClick() {
        if (currentOperator === '' || currentInput === '') {
            return;
        }
        const secondOperand = parseFloat(currentInput);
        switch (currentOperator) {
            case '+':
                currentInput = (firstOperand + secondOperand).toString();
                break;
            case '-':
                currentInput = (firstOperand - secondOperand).toString();
                break;
            case '*':
                currentInput = (firstOperand * secondOperand).toString();
                break;
            case '/':
                if (secondOperand === 0) {
                    currentInput = 'Error';
                } else {
                    currentInput = (firstOperand / secondOperand).toString();
                }
                break;
        }
        currentOperator = '';
        shouldResetScreen = true;
        updateScreen();
    }

    // Clear button click
    buttons[0].addEventListener('click', function () {
        currentInput = '';
        currentOperator = '';
        firstOperand = null;
        shouldResetScreen = false;
        updateScreen();
    });

    // Delete button click
    buttons[2].addEventListener('click', function () {
        currentInput = currentInput.slice(0, -1);
        updateScreen();
    });

    // Add event listeners for number buttons
    for (let i = 1; i <= 9; i++) {
        buttons[i].addEventListener('click', function () {
            handleNumberClick(i);
        });
    }

    // Add event listeners for operator buttons
    buttons[10].addEventListener('click', function () {
        handleOperatorClick('+');
    });
    buttons[11].addEventListener('click', function () {
        handleOperatorClick('-');
    });
    buttons[12].addEventListener('click', function () {
        handleOperatorClick('*');
    });
    buttons[13].addEventListener('click', function () {
        handleOperatorClick('/');
    });

    // Equals button click
    buttons[15].addEventListener('click', function () {
        handleEqualsClick();
    });
});
