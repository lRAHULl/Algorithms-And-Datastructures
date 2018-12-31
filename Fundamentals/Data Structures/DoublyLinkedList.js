class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
        return this;
    }
    pop() {
        if (this.length === 0) return null;
        let temp = this.tail;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        }
        else{
            this.tail = temp.prev;
            this.tail.next = null;
            temp.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }
    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift() {
        if (this.length === 0) return null;
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = temp.next;
            this.head.prev = null;
            temp.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
    get(pos) {
        let temp = this.head;
        if (pos < 0 || pos >= this.length) return null;
        for (let i = 0; i < pos; i++) {
            temp = temp.next;
        }
        return temp;
    }
    set(pos, value) {
        let temp = this.get(pos);
        if (pos < 0 || pos >= this.length) return null;
        else {
            temp.value = value;
        }
        return temp.value;
    }
    insert(pos, value) {
        if (pos < 0 || pos > this.length) return null;
        let newNode = new Node(value);
        if (pos === this.length) return this.push(value);
        else if (pos === 0) return this.unshift(value);
        else {
            let before = this.get(pos - 1);
            let current = before.next;
            before.next = newNode;
            newNode.prev = before;
            newNode.next = current;
            current.prev = newNode;
        }
        this.length++
        return this;
    }
    remove(pos) {
        let removed = this.get(pos);
        if (pos < 0 || pos >= this.length) return null;
        if (pos === this.length - 1) return this.pop();
        else if (pos === 0) return this.shift();
        else {
            let before = this.get(pos - 1);
            let after = this.get(pos + 1);
            before.next = after;
            after.prev = before;
            removed.next = null;
            removed.prev = null;
            this.length++;
        }
        return removed;
    }
    reverse() {
        let temp = this.tail;
        while (this.head !== temp) {
            console.log(temp.value);
            temp = temp.prev;
        }
        console.log(temp.value);
    }
    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new DoublyLinkedList();
list.unshift(80);
list.push(100)
list.push(130)
list.push(180)
list.print();
list.insert(2,1000)
list.print();
// console.log(list.remove(0))
list.reverse()
// console.log(list.pop());
list.print();
console.log(list)