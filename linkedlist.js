//!makiing a linked list

class Node {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
//   setter(x) {
//     this.value = x;
//   }

// let head = new Node();
// head.setter(10);
// let temp1 = new Node();
// temp1.setter(20);
// let temp2 = new Node();
// head.next = temp1;
// temp2.setter(30);
// temp1.next = temp2;
// console.log(head.value + "-->" + temp1.value + "-->" + temp2.value);

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

// console.log(head);

function printlist(head) {
  let curr = head;
  let string = "";
  while (curr !== null) {
    string += curr.value + " ";
    curr = curr.next;
  }
  return string;
}

/* 

! how to traverse recursively through linked list  and print all value till null ;
10--->20--->30--->40--->null ;
make a function ;

*/

/* const printRec = (head) => {
  while (head !== null) {
    console.log(head.value);
    head = head.next;
  }
};

printRec(head);
 not a recursive fn , but works well */

const printRec = (head) => {
  if (head == null) {
    return;
  }
  console.log(head.value);
  printRec(head.next);
};
// printRec(head);

/* 
! insert at the begining of the linkedLIst : 
todo: push() ;
*/

function insertAtFront(head, x) {
  let temp = new Node(x);

  temp.next = head;
  return temp;
}
// console.log(insertAtFront(head, 5));

/* 
! insert at the end of the linkedLIst : 
todo: () ;
Since a Linked List is typically represented by the head of it, we have to traverse the list till the end and then change the next to last node to a new node.
*/

function insertAtEnd(head, x) {
  let temp = new Node(x);
  if (head == null) {
    return temp;
  }

  let curr = head;
  while (curr.next !== null) {
    curr = curr.next;
  }

  curr.next = temp;

  return head;
}

// insertAtEnd(head, 50);
// printRec(head);

/* 
! delete the first node of single linked list
Given a linked list, the task is to remove the first node of the linked list and update the head pointer of the linked list. 
*/
function deleteFrontHead(head) {
  if (head == null) return;
  while (head.next !== null) {
    head.value = head.next.value;
    head = head.next;
  }
  return head;
}

//o(1)
function deletefront(head) {
  if (head === null) return null;
  else {
    let temp = head.next;
    head.next = null;
    return temp;
  }
}

function deleteF(head) {
  if (head == null) return head;
  return head.next;
}

// head = deleteF(head);
// console.log(head);

// console.log(deleteFrontHead(head));
// console.log(deletefront(head));

// console.log(printlist(head));

/* 
! Insert at given position in Singly Linked List
suppose position followed 1 based indexing , 1 here represent first node value ;
*/
function insertPos(head, data, pos) {
  let temp = new Node(data);
  if (pos == 1) {
    temp.next = head;
    return temp;
  }
  let curr = head;
  for (let i = 1; i <= pos - 1 && curr !== null; i++) {
    curr = curr.next;
  }
  if (curr == null) return head;
  temp.next = curr.next;
  curr.next = temp;
  return head;
}
// insertPos(head, 35, 3);
// printRec(head);

/* 
! search in linkded list
*/

function searchLinkedList(head, x) {
  if (head.value == x) return 1;
  let curr = head;
  let i = 1;
  while (curr !== null) {
    if (x == curr.value) return i;
    curr = curr.next;
    i++;
  }
  return -1; //notfound
}
// console.log(searchLinkedList(head, 35));

function rec(head, x, i) {
  if (head.value === x) return i;
  else if (head === null) return -1;
  else {
    return rec(head.next, x, i + 1); //i++ will not work
  }
}
// console.log(rec(head, 35, 1));

function rec2(head, x) {
  if (head === null) return -1;
  if (head.value === x) return 1;

  let pos = rec2(head.next, x);

  if (pos === -1) return -1;
  return pos + 1;
}

// console.log(rec2(head, 35));

/* 
! sorted insertion in a linked list
O(n) time and space O(1)
*/
// 10 20 30 40
function insertSorted(head, x) {
  let temp = new Node(x);
  if (head === null) {
    return temp;
  }
  let curr = head;
  // handle b/w
  while (curr !== null) {
    if (x < curr.value) {
      //front
      temp.next = curr;
      return temp;
    } else if (x > curr.value && curr.next && x < curr.next.value) {
      //middle
      temp.next = curr.next;
      curr.next = temp;
      break;
    } else if (x > curr.value && curr.next === null) {
      //at last
      curr.next = temp;
    }
    curr = curr.next;
  }
  return head;
}
// console.log(insertSorted(head, 108));

// printRec(head);

function sortedInsertion(head, x) {
  let temp = new Node(x);
  if (head == null) return temp;

  if (x < head.value) {
    temp.next = head;
    return temp;
  }
  let curr = head;
  while (curr.next !== null && x > curr.next.value) {
    curr = curr.next;
  }
  temp.next = curr.next;
  curr.next = temp;
  return head;
}

sortedInsertion(head, 100);
sortedInsertion(head, 20);
sortedInsertion(head, 30);
sortedInsertion(head, 40);
sortedInsertion(head, 100);

// printRec(head);

/*
! return middle node value of linked list ,in case of even length, return next middle .
*/

// * two traversal ;

function middleOfLinkedList(head) {
  if (head === null) return null;
  let curr = head;
  let len = 1;
  while (curr.next !== null) {
    curr = curr.next;
    len++; // finded length
  }
  curr = head; // reupdate
  for (let i = 0; i < Math.floor(len / 2); i++) {
    curr = curr.next;
  }
  return curr.value;
}
// printRec(head);
// console.log(middleOfLinkedList(head));

//* single traversal - for interview
/*
 make two pointer one will move like i+1 (slow)  other like j+2 (fast) ; 
 when one is is middle other would be on null - even node length ; 
 last or second last to null - odd node length ;
*/

function middleOfLinkedListOptimal(head) {
  if (head == null) return;
  let slow = head;
  let fast = head;
  //  either of one become null , read carefully if you thought this condition is wrongly writter

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.value;
}

// printRec(head);
// console.log(middleOfLinkedListOptimal(head));

/* 
!Find the n-th node from end of the linked list
*/

function nthformlast(head, n) {
  if (head == null) return;
  let len = 0;
  let curr = head;
  while (curr !== null) {
    curr = curr.next;
    len++;
  }
  if (len < n) return null; //

  curr = head;

  for (let i = 1; i <= len - n; i++) {
    curr = curr.next;
  }
  return curr.value;
}

// printRec(head);
// console.log(nthformlast(head, 2)); //
// console.log(nthformlast(head, 6)); // null

// * method 2 ;using two pointers ; dont need the length/no of node of the linked list

/* 

move the first pointer , "n" position ahead of the second pointer, 
and when second pointer reach null we got the first.value as output , 
we have to move with same pace

*/

function nthLast(head, n) {
  if (head === null) return;
  let first = head,
    second = head;
  let l = 0; // l is not the length , its maintain the gap between both pointers
  while (second !== null) {
    if (l >= n) first = first.next;
    second = second.next;
    l++;
  }
  if (l < n) return null;
  return first.value;
}
// console.log(nthLast(head, 6)); //null
// console.log(nthLast(head, 5));

/* 
! Reverse a linked list
*/

//* Naive approach O(n) auxilary space (the array) , O(n) time complexity two traversal
//using an auxilary array ,then copying the data back to linked list ;

//O n time , space -O n  , two traversals
function reverseLinkedList(head) {
  let arr = [];
  let curr = head;
  while (curr != null) {
    arr.push(curr.value);
    curr = curr.next;
  }

  curr = head;
  for (let i = arr.length - 1; i >= 0; i--) {
    curr.value = arr[i];
    curr = curr.next;
  }

  return head;
}

/* printRec(head);
console.log(reverseLinkedList(head));
printRec(head); */

//* efficient solution ;two pointers starting from center of the linked list
// we rather changing the data we should change the links ,

/*
 function reverseList(head) {
  let curr = head;
  let len = 0;
  while (curr != null) {
    curr = curr.next;
    len++;
  }
  // len = 5 ; 10 20 30 40 50 // odd leave center untouch, len/2 -1 ,len/2 +1  // even  10 20 30 40 50 60  len/2 ,len/2+1
  if (len % 2 === 0) {
    //diffn=1
  } else {
    let left = head;
    let right = head;
    // let left = Math.floor(len / 2); // 5/2 = 2 represent , 20
    // let right = Math.floor(len / 2) + 2; // 5/2 +2  represent 40 ;diff = 2
    let l = 0;
    while (l <= Math.floor(len / 2) + 2) {
      if (l >= 2) left = left.next;
      l++;
      right = right.next;
    }
    while (right !== null) {}
  }
}
 */
//todo: O(n) time and O(1) space and single traversal ;

function revList(head) {
  let curr = head;
  let prev = null;
  while (curr != null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
// console.log(revList(head));
// printRec(head); //only

/* 
! reverse linked list by recurrsion ;
*/

//O(n) auxilary space and time as well ;

function revListRecur(head) {
  if (head == null || head.next == null) return head;
  let rest_head = revList(head.next);
  let rest_tail = head.next;
  rest_tail.next = head;
  head.next = null;
  return rest_head;
}

/* 
! Remove duplicates from the linked list ;
IN : 10>-20>-20>-20>-30>-40>-40 
OT : 10>-20>-30>-40
*/

// check if next node.value is same as current , if same , change it
function removeDUPlicates(head) {
  let curr = head;
  while (curr.next !== null) {
    if (curr.value !== curr.next.value) curr = curr.next;
    else if (curr.value === curr.next.value) {
      curr.next = curr.next.next;
    }
  }
  return curr;
}
printRec(head);
console.log("---");
removeDUPlicates(head);
console.log("---");
printRec(head);
