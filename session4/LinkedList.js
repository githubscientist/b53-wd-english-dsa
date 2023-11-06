/*
    Linked List
        - A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.
        - chain of nodes linked together (the nodes are not stored in a contiguous memory location)
        - a node is an object with two properties: data and next
            - the data property stores the value of the node
            - the next property is a reference to the next node in the list
        - the first node is called the head node and the last node is called the tail node
        - the tail node's next property is null
        - abstract data type: custom data type (a user-defined data type) in which we need to define the data type of the data stored in the ADT, the behaviour and the operations that can be performed on it
        - Operations:
            - insertFirst
            - insertLast
            - insertAt
            - removeFirst
            - removeLast
            - removeAt
            - indexOf
            - contains
            - size
            - toArray

        - Singly Linked List
        - Linked List Types:
            1. Singly Linked List
            2. Doubly Linked List
            3. Circular Linked List
        
        Structure of a Singly LinkedList:
            Let say we want to store [2, 3, 4, 5, 6]
            head                                                                                    tail
            data    next        data    next        data    next        data    next        data    next
            [2       0x01]    ->  3       0x02    ->  4       0x03    ->  5       0x04    ->  6       null

*/

// Implementation

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertLast(data) {
        // check if the linked list is empty
        if (this.head == null) {
            // list is empty
            this.head = this.tail = new Node(data);
        } else {
            // if the list is not empty
            this.tail.next = new Node(data);
            this.tail = this.tail.next;
        }
    }

    toArray() {
        let nodes = [];
        let thead = this.head;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }
        return nodes;
    }

    insertFirst(data) {
        let newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;
    }

    // returns the number of elements in the linked list
    size() {
        // return this.toArray().length;
        let nodes = 0;
        let thead = this.head;
        while (thead != null) {
            nodes++;
            thead = thead.next;
        }
        return nodes;
    }

    // returns true, if the data exists in the linked list,
    // returns false otherwise
    contains(data) {
        let thead = this.head;
        while (thead != null) {
            if (thead.data == data) {
                return true;
            }
            thead = thead.next;
        }
        return false;
    }

    // removes the first element of the list
    removeFirst() {
        // we need to allow the deletion only if the list is not empty
        if (this.head != null) {
            // check if the list has only one element
            if (this.head.next == null) {
                // the list has only one element
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
            }
        }
    }

    // removes the last element of the list
    removeLast() {
        let tailPrevious = this.head;
        if (this.head != null) {
            if (this.head.next == null) {
                this.head = this.tail = null;
            } else {
                while (tailPrevious.next != this.tail) {
                    tailPrevious = tailPrevious.next;
                }
                // after the loop breaks
                // tailPrevious.next to point to the tail pointer
                // remove the tail node
                tailPrevious.next = null;
                // adjust the tail pointer
                this.tail = tailPrevious;
            }
        }
    }
}

let list = new LinkedList();

list.insertLast(3);
list.insertLast(4);
list.insertLast(5);
list.insertLast(7);

list.insertFirst(2);
list.insertFirst(1);
list.removeFirst();
list.removeFirst();
list.removeLast();
list.removeLast();

/*

- insertFirst
            - insertLast
            - insertAt
            - removeFirst
            - removeLast
            - removeAt
            - indexOf
            - contains
            - size
            - toArray
            - insertFirst
*/



console.log(list.toArray());
// console.log(list.contains(30));

/*
    list = LinkedList {
        head: Node {
            data: 2,
            next: Node {
                data: 3,
                next: Node {
                    data: 4,
                    next: Node {
                        data: 5,
                        next: Node {
                            data: 7,
                            next: null
                        }
                    }
                }
            }
        },
        tail: Node {
            data: 7,
            next: null
        }
    }
*/