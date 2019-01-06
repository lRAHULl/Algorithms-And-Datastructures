class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 STACK => LIFO Data Structure
 =========================== 
 

 
 Time Complexity
 ===============
 Insertion - O(1)

 Removal - O(1)

 Searching - O(N)

 Access - O(N)

 */
class Stack {
  constructor() {
    this.size = 0;
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
    this.size++;
    return this.size;
  }
  pop() {
    if (this.size === 0) return null;
    let removed = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return removed.value;
  }
  print() {
    let arr = [];
    let temp = this.first;
    for (let i = 0; i < this.size; i++) {
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
// stack.pop()
// stack.pop()
// stack.pop()
// console.log(stack.pop())
stack.print();
// console.log(stack);