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
    // convert the sentence to words array
    let words = userInput[0].split(' ');

    // create an empty stack
    let stack = new Stack();

    // 1. iterate the words array <- word
    for (let word of words) {
        // 2. check if the stack is empty
        if (stack.isEmpty()) {
            // 3. push the word to the stack
            stack.push(word);
        } else {
            // 4. else if the stack is not empty
            // 5. check and compare the word and the top of the stack
            if (word !== stack.peek()) {
                // if they are'nt equal,
                // push the word to the stack   
                stack.push(word);
            } else {
                // else if they are equal
                // pop the stack 
                stack.pop();
            }  
        }
    }

    // check if the stack is empty
    if (stack.isEmpty()) {
        console.log(-1);
    } else {
        // if the stack is not empty
        console.log(stack.items.join(' '));
    }
});