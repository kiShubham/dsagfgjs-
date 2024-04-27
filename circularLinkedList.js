/* 
 ? The circular linked list is a linked list where all nodes are connected to form a circle. 
 ? In a circular linked list, the first node and the last node are connected to each other
 ? which forms a circle. There is no NULL at the end.
*/

/* 
* There are generally two types of circular linked lists:

 todo: Circular singly linked list:
  In a circular Singly linked list, the last node of the list contains 
  a pointer to the first node of the list. We traverse the circular singly linked list until we
  reach the same node where we started. The circular singly linked list has no beginning or end. 
  No null value is present in the next part of any of the nodes.

  todo: Circular Doubly linked list:
  Circular Doubly Linked List has properties of both doubly linked list and 
  circular linked list in which two consecutive elements are linked or connected 
  by the previous and next pointer and the last node points to the first node by
  the next pointer and also the first node points to the last node by the previous pointer.

  */

class Node {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

function printRec(head) {
  if (head == null) {
    return;
  }
  console.log(head.value);
  printRec(head.next);
}

function printCircular(head) {
  if (head == null) return;
  console.log(head.value);
  for (let curr = head.next; curr != head; curr = curr.next) {
    console.log(curr.value);
  }
}

// printRec(head);

function makeCircularLinkedList(head) {
  if (head == null) return head;
  let curr = head;
  while (curr.next != null) curr = curr.next;
  curr.next = head;
  return head;
}

// makeCircularLinkedList(head); //working fine
// printCircular(head);

/* 

! insert at begin of a circular_linkedList ;
 make a new head

*/

// O(n)
function insertAtFirst(head, x) {
  let curr = makeCircularLinkedList(head);
  let temp = new Node(x);
  if (head == null) {
    temp.next = temp;
    return temp;
  }
  temp.next = curr;
  curr = curr.next;
  while (curr.next !== temp.next) curr = curr.next; // writing temp.next beacuse cant write curr, as curr has changed to curr.next already ;
  curr.next = temp;
  return temp;
}

// printCircular(insertAtFirst(head, 5));

// O(1) both time and auxilary space ;
function insertAtBegin(head, x) {
  let curr = makeCircularLinkedList(head);
  let temp = new Node(x);
  if (curr == null) {
    temp.next = temp;
    return temp;
  }
  temp.next = curr.next;
  curr.next = temp;
  [curr.value, temp.value] = [temp.value, curr.value];
  return curr;
}

// printCircular(insertAtBegin(head, 5));

/* 
todo: Insert at the end
*/

//O(n)
function insertAtEndNaive(head, x) {
  let curr = makeCircularLinkedList(head);
  let temp = new Node(x);
  if (curr === null) {
    temp.next = temp;
    return temp;
  }
  while (curr.next != head) curr = curr.next;
  curr.next = temp;
  temp.next = head;
  return head;
}
// printCircular(insertAtEndNaive(head, 60));

// O(1)
function insetAtEndOptimal(head, x) {
  let curr = makeCircularLinkedList(head);
  let temp = new Node(x);
  if (curr == null) {
    temp.next = temp;
    return temp;
  }
  temp.next = curr.next;
  curr.next = temp;
  [curr.value, temp.value] = [temp.value, curr.value];
  return temp;
}

// printCircular(insetAtEndOptimal(head, 70));

/* 
! delete the kth node from a circular linked list
assuming  number of node is greater than k ;
*/
// O(k) time and O(1) space

function deleteKth(head, k) {
  let curr = makeCircularLinkedList(head);
  if (head == null) return head;
  if (k == 1) {
    //deleteHead(head)
  }
  for (let i = 0; i < k - 2; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  return head;
}
// printCircular(head)
// printCircular(deleteKth(head, 4));

//todo: Circular Doubly_LinkedList

// Doubly linked list
class Dnode {
  constructor(x) {
    this.value = x;
    this.prev = null;
    this.next = null;
  }
}

let headDD = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);

head.next = temp1;
temp1.next = temp2;
temp2.prev = temp1;
temp1.prev = head;

/* 
? Insert at the begin
*/

function insertAtBeginDll(head, x) {
  let temp = new Node(x);
  if (head == null) {
    temp.next = temp;
    temp.prev = temp;
    return temp;
  }
  temp.next = head;
  temp.prev = head.prev;
  head.prev.next = temp;
  head.prev = temp;
  return temp;
}

printRec(insertAtBeginDll(headDD, 5));
