/*
    Stack
        - a datastructure that follows the LIFO (Last In First Out) principle or FILO (First In Last Out)
            - the last element added to the stack will be the first element removed from the stack
            - the first element added to the stack will be the last element removed from the stack
        - stack is an abstract data type and linear data structure
        - operations:
            - push: add an element to the top of the stack
            - pop: remove an element from the top of the stack
            - peek: get the top element of the stack without removing it
            - isEmpty: check if the stack is empty
            - isFull: check if the stack is full
            - size: get the number of elements in the stack
        - implementation:
            - array
            - list
*/

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

module.exports = Stack;