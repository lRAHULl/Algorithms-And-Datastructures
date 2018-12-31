class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }
    pop() {
        let oldTail = this.head;
        let newTail = this.head;
        if (this.length === 0) return null;
        while (oldTail.next) {
            newTail = oldTail;
            oldTail = oldTail.next;
        }
        let value = this.tail.value;
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;   
        }
        return value;
    }
    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift() {
        let temp = this.head;
        let value = temp.value;
        this.head = temp.next;
        this.length--;
        return value;
    }
    get(pos) {
        if (pos < 0 || pos >= this.length) return null;
        if (pos === 0) return this.head;
        if (pos === this.length - 1) return this.tail;
        let temp = this.head;
        for (let i = 0; i < pos; i++) {
            temp = temp.next;
        }
        let val = temp.value;
        return temp;
    }
    set(pos, value) {
        if (pos < 0 || pos >= this.length) return null;
        if (pos === 0) return this.head.value = value;
        if (pos === this.length - 1) return this.tail.value = value;
        let temp = this.head;
        for (let i = 0; i < pos; i++) {
            temp = temp.next;
        }
        temp.value = value;
        return this
    }
    insert(pos, value) {
        if (pos < 0 || pos > this.length) return null;
        let newNode = new Node(value);
        if (pos === 0) return this.unshift(value);
        if (pos === this.length) return this.push(value);
        let prev = this.get(pos - 1);
        let after = prev.next;
        newNode.next = after;
        prev.next = newNode;
        this.length++;
        return this;
    }
    remove(pos) {
        if (pos < 0 || pos >= this.length) return null;
        let prev = this.get(pos - 1);
        let temp = prev.next;
        let val = temp.value;
        prev.next = temp.next;
        this.length--;
        return val;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print() {
        let arr = [];
        let temp = this.head;
        while(temp) {
            arr.push(temp.value);
            temp = temp.next;
        }
        console.log(arr)
    }
}


let list = new SinglyLinkedList();

list.unshift(60);
list.unshift(50);
list.push(70);
list.push(90);
list.push(100);
list.push(110);
list.push(120);
list.push(130);
list.push(140);
list.print();
// list.pop();
// list.print();
// list.shift();
// list.print();
console.log(list.get(6));
list.insert(9, 150);
list.remove(7);
list.print();
list.reverse();
list.print();