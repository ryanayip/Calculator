class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return

        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return
        if (this.previousOperand !== "") {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""


    }

    compute() {
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
    
        switch (this.operation) {
            case "+": 
                computation = prev + current
                break
            case "-": 
                computation = prev - current
                break
            case "*": 
                computation = prev * current
                break
            case "÷": 
                if (current == "0") {
                    this.currentOperand = "You can't do that"
                    this.previousOperand = "I love u JNV"
                    return
                }
                computation = prev / current
                break
        default: 
            return
        
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ""
    }


    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = 
            `${this.previousOperand} ${this.operation}`

        } else {
            this.previousOperandTextElement.innerText = ""
        }
        //this.previousOperandTextElement.innerText = this.previousOperand


    }
}

const numberButtons = document.querySelectorAll("[data-number]")
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[data-current-operand]")

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener("click", button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener("click", button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener("click", button => {
    calculator.delete()
    calculator.updateDisplay()
})

// For Keyboard Support. Currently having issues with the enter button...
// document.addEventListener('keydown', (event) => {
//         if (event.key == "0") {calculator.appendNumber("0"); calculator.updateDisplay()}
//         else if (event.key == "Enter") {calculator.compute() ; calculator.updateDisplay()}
//         else if (event.key == "1") {calculator.appendNumber("1"); calculator.updateDisplay()}
//         else if (event.key == "2") {calculator.appendNumber("2"); calculator.updateDisplay()}
//         else if (event.key == "3") {calculator.appendNumber("3"); calculator.updateDisplay()}
//         else if (event.key == "4") {calculator.appendNumber("4"); calculator.updateDisplay()}
//         else if (event.key == "5") {calculator.appendNumber("5"); calculator.updateDisplay()}
//         else if (event.key == "6") {calculator.appendNumber("6"); calculator.updateDisplay()}
//         else if (event.key == "7") {calculator.appendNumber("7"); calculator.updateDisplay()}
//         else if (event.key == "8") {calculator.appendNumber("8"); calculator.updateDisplay()}
//         else if (event.key == "9") {calculator.appendNumber("9"); calculator.updateDisplay()}
//         else if (event.key == ".") {calculator.appendNumber("."); calculator.updateDisplay()}
//         else if (event.key == "+") {calculator.chooseOperation("+")
//             calculator.updateDisplay()}
//         else if (event.key == "-") {calculator.chooseOperation("-")
//         calculator.updateDisplay()}
//         else if (event.key == "*") {calculator.chooseOperation("*")
//         calculator.updateDisplay()}
//         else if (event.key == "/") {calculator.chooseOperation("÷")
//         calculator.updateDisplay()}
//         else if (event.key == "Backspace") {calculator.delete(); calculator.updateDisplay()}
        
//         else {return}
        
//     });
