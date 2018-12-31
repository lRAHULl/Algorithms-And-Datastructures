class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
Time Complexity:
===============
Insertion: O(1)
Removal(At beginning or end): O(1)
Removal(At Middle): O(N)
Searching: O(N)
Access: O(N)
 */
class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(value) {
        let newNode = new Node(value)
        if (this.length === 0 && !this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }
    // traverse() {
    //     let current = this.head;
    //     while (current) {
    //         current = current.next;
    //     }
    // }
    pop() {
        let oldTail = this.head;
        let newTail = oldTail
        if (this.length == 0) return undefined;
        while (oldTail.next) {
            newTail = oldTail;
            oldTail = oldTail.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return oldTail.value;
    }
    shift() {
        if (this.next === 0) return undefined;
        let oldHead = this.head;
        let newHead = this.head.next;
        this.head  = newHead;
        this.length--;
        return oldHead.value;
    }
    unshift(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(position) {
        if (position < 0 || position >= this.length) return null;
        else if (position === this.length - 1) return this.tail.value;
        else if (position === 0) return this.head.value;
        else {
            let temp = this.head;
            for (let i = 0; i < position; i++) {
                temp = temp.next
            }
            return temp;
        }
    }
    set(position, value) {
        let foundNode = this.get(position);
        if (foundNode) {
            foundNode.value = value;
            return foundNode;
        }
        return false;
    }
    insert(position, value) {
        if (position < 0 || position > this.length) return false;
        else if (position === 0) return !!this.unshift(value);
        else if (position === this.length) return !!this.push(value);
        else {
            let newNode = new Node(value)
            let prev = this.get(position - 1);
            let after = this.get(position);
            prev.next = newNode;
            newNode.next = after;
        }
        this.length++;
        return true;
    }
    remove(position) {
        if (position < 0 || position >= this.length) return null;
        else if (position === 0) return this.shift();
        else if (position === this.length - 1) return this.pop();
        else {
            let prev = this.get(position - 1);
            let removed = prev.next;
            prev.next = removed.next;
            this.length--
            return removed.value;
        }
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
        // 1st iteration
        //   1   ->   2   ->   3   ->   4   ->   5
        // Node      Next
        //   1   ->  null

        // 2nd iteration
        //   1   ->   2   ->   3   ->   4   ->   5
        // prev     node     next
        //   2   ->   1   ->   null

        return this;
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

let list = new SinglyLinkedList()
list.push(0)
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
// console.log(list.get(3));
// console.log(list.get(4));
list.print();
console.log(list.reverse());
list.print();
// console.log(list.get(5));