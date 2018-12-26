class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.pointer = 0;
        this.first = null;
        this.last = null;
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            let temp = newNode;
            temp.next = this.first;
            this.first = temp;
        }
        this.pointer++;
        return this.pointer;
    }
    pop() {
        if (this.pointer === 0) return null;
        let removed = this.first;
        if (this.pointer === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.pointer--;
        return removed.value;
    }
    print() {
        let arr = [];
        let temp = this.first;
        for (let i = 0; i < this.pointer; i++) {
            arr.push(temp.value);
            temp = temp.next;
        }
        console.log(arr);
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.push(5));
console.log(stack.pop());
stack.pop()
stack.pop()
stack.pop()
console.log(stack.pop())
stack.print();
// console.log(stack);