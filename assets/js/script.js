// wait for the DOM to be loaded before running the game

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                // alert( `You selected ${gameType}`);
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    //Create 2 random numbers between 1 and 30
    let num1 = Math.floor(Math.random() * 30) + 1;
    let num2 = Math.floor(Math.random() * 30) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type ${gameType}. Aborting!`
    }
}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("You got it right! :D");
    } else {
        alert(`Ooooh... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`);
    }
}

/**
 * Gets the operands (numbers) and the operator
 * directly form the dom and returns the correct answer.
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}