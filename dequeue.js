/* 
? doubly ended Queue

Deque or Double Ended Queue is a generalized version of Queue data structure
that allows insert and delete at both ends.

Operations on Deque: Mainly the following four basic operations are performed on queue:
insertFront(): Adds an item at the front of Deque.
insertLast(): Adds an item at the rear of Deque.
deleteFront(): Deletes an item from the front of Deque.
deleteLast(): Deletes an item from the rear of Deque. In addition to the above operations, the following operations are also supported.
getFront(): Gets the front item from the queue.
getRear(): Gets the last item from queue.
isEmpty(): Checks whether Deque is empty or not.
isFull(): Checks whether Deque is full or not.
 
*/

/* 
todo:
1. applying using arrays: circular array ; all operation is O(1)
2.applying  with linked list (doubly ended list)
*/

// we will not make rear variable, that can find using front and size ; rear = (this.front+this.size) % this.cap

class DequeCircularArray {
  constructor(c) {
    this.cap = c;
    this.size = 0;
    this.front = 0;
    this.arr = new Array(c);
  }
  insertFront(x) {
    if (this.size === this.cap) return;
    this.front = (this.front + this.cap + 1) % this.cap;
    this.arr[this.front] = x;
    this.size++;
    return;
  }
  deleteFront() {
    if (this.size == 0) return;
    this.front = (this.front + 1) % this.cap;
    this.size--;
  }
  insertRear(x) {
    if (this.size === this.cap) return;
    let newRear = (this.size + this.front) % cap;
    this.arr[newRear] = x;
    this.size++;
    return;
  }
  deleteRear() {
    //since we are not maintaing rear variable we dont need to increase or decrease it, just change size;
    if (this.size == 0) return;
    this.size--;
    return;
  }
}
