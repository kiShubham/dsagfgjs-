/* 

Queue implementation in javascript can be done using
1. arrays : since all op takes O(1) but deque op takes O(n) linear operation ;so we should avoid using array based Queue implementation
2. using map/object ;
3. using circular array ;
4. using linked list ;

*/
/* 
? with arrays:
*/

// !simpler
class QueueArraysimpler {
  constructor() {
    this.arr = new Array();
  }
  enque(x) {
    return this.arr.push(x); //O(1)
  }
  deque() {
    return this.arr.shift(); //O(n)
  }
  size() {
    return this.arr.length;
  }
  getFront() {
    return this.arr[0];
  }
  getRear() {
    return this.arr[this.arr.length - 1];
  }
  isEmpty() {
    return this.arr.length == 0;
  }
}
//! more accurate: circular array, all operation : O(1)
//not maintaining rear variable, got it from size and front ;
class Queue {
  constructor(cap) {
    this.cap = cap;
    this.arr = new Array(cap);
    this.front = 0;
    this.size = 0;
  }
  getFront() {
    if (this.size === 0) return null;
    return this.arr[this.front];
  }
  getRear() {
    if (this.size === 0) return null;
    let r = (this.front + this.size - 1) % this.cap;
    return this.arr[r];
  }
  enque(x) {
    if (this.size === this.cap) return;
    let r = (this.front + this.size - 1) % this.cap;
    r = (r + 1) % this.cap;
    this.arr[r] = x;
    this.size++;
  }
  deque() {
    if (this.size === 0) return null;
    let res = this.arr[this.front];
    this.front = (1 + this.front) % cap;
    this.size--;
    return res;
  }
}
let n = new Queue(4);
let len = n.getFront();
// console.log(len);
n.enque(10);
n.enque(20);
n.enque(30);
// console.log(n.getRear());

/* 
? making Queue using linkedList datastructure ;
*/
class Node {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  enque(x) {
    let temp = new Node(x);
    if (this.front === null) {
      this.front = temp;
    } else {
      this.rear.next = temp;
      this.size += 1;
    }
  }
  deque() {
    if (this.front === null) return null;
    let res = this.front;
    this.front = this.front.next;
    this.size--;
    return res; //if asked to return the front value at deque operationl;
  }
  size() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
}

/* 
? implementation using hashing / map / object
time complexity for all opearation : O(1)
*/

class QueueMap {
  constructor() {
    this.map = {};
    this.front = -1;
    this.rear = -1;
  }
  enque(x) {
    this.rear++;
    this.map[this.rear] = x;
    if (this.front === -1) {
      this.front++;
    }
    return;
  }
  deque() {
    if (this.front == -1) return null;
    let res = this.map[this.front];
    //delete this.map[this.front] //we are not actually deleting it we are just changing front ;
    this.front++;
    if (this.front > this.rear) {
      this.front = this.rear = -1;
    }
    return res;
  }
  getFront() {
    return this.map(this.front);
  }
  getRear() {
    return this.map(this.rear);
  }
  size() {
    return this.rear - this.front + 1;
  }
  isEmpty() {
    return this.front == -1;
  }
}

let q = new QueueMap();
q.enque(10);
q.enque(20);
q.enque(30);
q.enque(40);
console.log(q.size());
