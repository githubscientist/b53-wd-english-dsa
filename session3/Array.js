class Item {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Array {
    constructor() {
        this.head = null;
    }

    toArray() {
        let items = [];
        let thead = this.head;

        while (thead != null) {
            items.push(thead.data);
            thead = thead.next;
        }

        return items;
    }

    push(data) {
        let newItem = new Item(data);
        if (this.head == null) {
            this.head = newItem;
        } else {
            let thead = this.head;
            while (thead.next != null) {
                thead = thead.next;
            }
            thead.next = newItem;
        }
    }

    forEach(func) {
        let thead = this.head;
        let index = 0;
        let items = [];

        while (thead != null) {
            items.push(thead.data);
            thead = thead.next;
        }
        
        thead = this.head;
        while (thead != null) {
            func(thead.data, index++, items);
            thead = thead.next;
        }
    }
}

module.exports = Array;