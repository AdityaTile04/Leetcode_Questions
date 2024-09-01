/**
 * @param {number[][]} queries
 * @param {number} k
 * @return {number[]}
 */
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        this._siftUp();
    }
    
    pop() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._siftDown();
        }
        return max;
    }
    
    _siftUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element <= parent) break;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
        this.heap[idx] = element;
    }
    
    _siftDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swap = null;
            
            if (leftChildIdx < length) {
                let leftChild = this.heap[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            
            if (rightChildIdx < length) {
                let rightChild = this.heap[rightChildIdx];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > this.heap[swap])) {
                    swap = rightChildIdx;
                }
            }
            
            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            idx = swap;
        }
        this.heap[idx] = element;
    }
    
    peek() {
        return this.heap[0];
    }
    
    size() {
        return this.heap.length;
    }
}

var resultsArray = function(queries, k) {
    const maxHeap = new MaxHeap();
    const distances = [];
    
    for (let i = 0; i < queries.length; i++) {
        let [x, y] = queries[i];
        let distance = Math.abs(x) + Math.abs(y);
        
        
        if (maxHeap.size() < k) {
            maxHeap.push(distance);
        } else if (distance < maxHeap.peek()) {
            maxHeap.pop();
            maxHeap.push(distance);
        }
        
       
        if (maxHeap.size() < k) {
            distances.push(-1);
        } else {
            distances.push(maxHeap.peek());
        }
    }
    
    return distances;
};


console.log(resultsArray([[1,2],[3,4],[2,3],[-3,0]], 2)); 
console.log(resultsArray([[5,5],[4,4],[3,3]], 1));        
