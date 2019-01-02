/**
 * 
 * parent at index -> n
 * L-Child -> 2n + 1
 * R-child -> 2n + 2
 * 
 * child at n -> parent ar int((n-1)/2)
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    return this;
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element > parent) {
        this.values[parentIdx] = element;
        this.values[idx] = parent;
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(5);
console.log(heap.values)