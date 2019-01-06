class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

/**
 * Time Complexity :
 * ===============
 * 
 * Inseration: O(log N)
 * 
 * Removal: O(log N)
 * 
 * Search: O(N)
 * 
 * Rules:
 * =====
 * 
 * parent at index -> n
 * 
 * L-Child -> 2n + 1
 * 
 * R-child -> 2n + 2
 * 
 * child at n -> parent at int((n-1)/2)
 * 
 * In a Min Binary Tree -> Parents are always smaller than their Children.
 * 
 */

// Using MinBinaryHeap
// small priority has maximum Priority
class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(value, priority) {
		let newNode = new Node(value, priority);
		this.values.push(newNode);
		this.bubbleUp();
		return this;
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		let element = this.values[idx];

		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (element.priority < parent.priority) {
				this.values[parentIdx] = element;
				this.values[idx] = parent;
				idx = parentIdx;
			} else {
				break;
			}
		}
	}

	dequeue() {
		let result = this.values[0];
		let end = this.values.pop();
		if (this.values.length) {
			this.values[0] = end;
			this.sinkDown();
		}
		return result;
	}
	sinkDown() {
		let idx = 0;
		let element = this.values[idx];
		let length = this.values.length;

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let rightChild, leftChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) {
					swap = leftChildIdx;
				}
			}

			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) {
				break;
			}

			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}

	}
}


// Lowest Priority Come first.
let q = new PriorityQueue()
q.enqueue("Common Cold", 10);
q.enqueue("high fever", 8);
q.enqueue("Gunshot", 2);
q.enqueue("accident", 1);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.values);