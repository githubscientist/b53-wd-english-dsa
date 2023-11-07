// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    isEmpty() {
        return this.top === -1;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.top];
        }
    }
}

inp.on("close", () => {
    let expression = userInput[0]; 

    let assumption = true;

    // create an empty stack
    let stack = new Stack();

    // iterate the expression
    for (let bracket of expression) {
        // check if the bracket is a open bracket
        if (bracket == '{' || bracket == '(' || bracket == '[') {
            // push the bracket to the stack
            stack.push(bracket);
        } else {
            // if the bracket is not an open bracket
            if (bracket == '}' && stack.peek() == '{') {
                // pop the stack
                stack.pop();
            } else if (bracket == ')' && stack.peek() == '(') {
                stack.pop();
            } else if (bracket == ']' && stack.peek() == '[') {
                stack.pop();
            } else {
                assumption = false;
            }
        }
    }

    // check if the stack is not empty
    if (!stack.isEmpty()) assumption = false;

    console.log(assumption ? 'yes' : 'no');
});