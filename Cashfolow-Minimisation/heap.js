export { BinaryHeap };

class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  empty() {
    return this.size() === 0;
  }
  insert(value) {
    this.heap.push(value);
    this.heapify();
  }

  heapify() {
    let index = this.size() - 1;

    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (parent[0] > element[0]) break;

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.heap[0];
    const tmp = this.heap.pop();
    //Only input an element back inot the heap if size is not zero
    if (!this.empty()) {
      this.heap[0] = tmp;
      this.sinkDown(0);
    }

    return max;
  }

  sinkDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;
    let length = this.size();

    if (left < length && this.heap[left][0] > this.heap[largest][0]) {
      largest = left;
    }
    if (right < length && this.heap[right][0] > this.heap[largest][0]) {
      largest = right;
    }
    if (largest != index) {
      let tmp = this.heap[largest];
      this.heap[largest] = this.heap[index];
      this.heap[index] = tmp;
      this.sinkDown(largest);
    }
  }
}
