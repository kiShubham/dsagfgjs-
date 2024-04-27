/* 
A Doubly Linked List (DLL) contains an extra pointer, typically called the previous pointer, 
together with the next pointer and data which are there in the singly linked list.

so you can traverse forward as well as backward ;
*/

class Node {
  constructor(x) {
    this.value = x;
    this.next = null;
    this.prev = null;
  }
}

let head = new Node(10);
let temp1 = new Node(20);
let temp2 = new Node(30);

head.next = temp1;
temp1.next = temp2;
temp2.prev = temp1;
temp1.prev = head;

// console.log(head);
function printList(head) {
  if (head === null) {
    return;
  }
  console.log(head.value);
  printList(head.next);
}

/* 
! insert at the beginning of the linked list ; 
*/

function insertAtFront(head, x) {
  let curr = head;
  let temp = new Node(x);
  if (head === null) return temp;
  else {
    curr.prev = temp;
    temp.next = curr;
  }
  //   printList(temp);
  return temp;
}
// console.log(insertAtFront(head, 5));

/*  
! insert at the End of the linked list ;  theta(1) auxilary space and theta(n) time Complexity
*/
function insertAtEnd(head, x) {
  let curr = head;
  let temp = new Node(x);
  if (head === null) return temp;
  while (curr.next !== null) curr = curr.next;
  curr.next = temp;
  temp.prev = curr;
  //   printList(head);
  return head;
}

insertAtEnd(head, 50);

/* 
! reverse a doubly link list 
*/

//naive make use of array ;
function reverseDoubly(head) {
  let arr = [];
  let curr = head;
  while (curr != null) {
    arr.push(curr.value);
    curr = curr.next;
  }
  curr = head;
  for (let i = arr.length - 1; i >= 0; i--) {
    curr.value = arr[i];
    if (i == 0) {
      curr.prev = null;
    } else {
      curr.prev = arr[i + 1];
    }
    if (i == arr.length - 1) {
      curr.next = null;
    } else {
      curr.next = arr[i - 1];
    }
    curr = curr.next;
  }
  printList(head);
  return head;
}

// reverseDoubly(head);

function reverse(head) {
  if (head == null) return head;
  let curr = head,
    prev = null;
  while (curr !== null) {
    prev = curr;
    [curr.prev, curr.next] = [curr.next, curr.prev];
    curr = curr.prev;
  }
  printList(prev);
}
// reverse(head);

/* 
! Delete the last node of the doubly linked List 
*/

function deleteLast(head) {
  if (head == null || head.next == null) return null;
  let curr = head;

  /* while (curr.next.next !== null) curr = curr.next;
  curr.next = null; */ //one iteration less

  while (curr.next !== null) curr = curr.next;
  curr.prev.next = null;
  return head;
}
printList(deleteLast(head));
