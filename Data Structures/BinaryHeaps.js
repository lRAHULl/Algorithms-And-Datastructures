/**
 * 
 * 
 * 
 * 
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    console.log(this.values);
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const value = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (value <= parent) break;
      this.values[idx] = parent;
      this.values[parentIdx] = value;
      idx = parentIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(3);