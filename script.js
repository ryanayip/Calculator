function add(a, b) {

    return a + b;
}

function subtract(a, b) {

    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b
}


const inputRow = document.querySelector(".inputRow")
const allButtons = document.querySelectorAll(".button")
//const operators = ["*", "/", "-", "+"]

allButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.dataset.value

        if (value === "=") {
            if (inputRow.innerText.includes("/")) {
                const splitStuff = inputRow.innerText.split("/")
                operate("/", splitStuff[0], splitStuff[1])
            }
            if (inputRow.innerText.includes("-")) {
                const splitStuff = inputRow.innerText.split("-")
                operate("-", splitStuff[0], splitStuff[1])
            }
            if (inputRow.innerText.includes("+")) {
                const splitStuff = inputRow.innerText.split("+")
                operate("+", splitStuff[0], splitStuff[1])
            }
            if (inputRow.innerText.includes("*")) {
                const splitStuff = inputRow.innerText.split("*")
                operate("*", splitStuff[0], splitStuff[1])
            }

        }
        inputRow.innerText += value
    })
})

const clearButton = document.querySelector("#clearButton")

clearButton.addEventListener("click", (e) => {
    inputRow.innerText = " "
})

const operate = (operator, value1, value2) => {
    if (operator === "/") {
        if (value2 === "0") {
            inputRow.innerText = "Please don't do that";
            return
        }
        inputRow.innerText = (value1 / value2)

    }
    if (operator === "-") {
        inputRow.innerText = (value1 - value2)

    }
    if (operator === "+") {
        inputRow.innerText = (Number(value1) + Number(value2))

    }
    if (operator === "*") {
        inputRow.innerText = (value1 * value2)

    }

}

