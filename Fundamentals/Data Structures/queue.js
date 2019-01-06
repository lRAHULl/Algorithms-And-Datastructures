class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}


/**
 
 Queue => FIFO Data Structure
 ============================
 


 Time Complexity
 ===============
 Insertion - O(1)

 Removal - O(1)

 Searching - O(N)

 Access - O(N)

 */
class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	enqueue(value) {
		let newNode = new Node(value);
		if (this.length === 0) {
			this.first = newNode;
			this.last = this.first;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this.length;
	}
	dequeue() {
		if (this.length === 0) return null;
		let removed = this.first;
		if (this.length === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = this.first.next;
		}
		this.length--;
		return removed.value;
	}
	print() {
		let arr = [];
		let temp = this.first;
		for (let i = 0; i < this.length; i++) {
			arr.push(temp.value);
			temp = temp.next;
		}
		console.log(arr);
	}
}

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
q.print();
console.log(q);