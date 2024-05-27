class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.right = new Node(50);
root.left.left = new Node(40);
root.right.left = new Node(60);
root.right.right = new Node(70);

// inoder Traversal  ;
// print : left right root left right

const inOrder = (root) => {
  if (root != null) {
    inOrder(root.left);
    console.log(root.key);
    inOrder(root.right);
  }
};

// console.log(inOrder(root));

//todo : PreOrder Traversal :
// print root left right;

function preOrder(root) {
  if (root != null) {
    console.log(root.key);
    preOrder(root.left);
    preOrder(root.right);
  }
}

// console.log(preOrder(root));

// todo: Post Order ;
//print : the left subtree -> the right subtree -> the root

function postOrder(root) {
  if (root != null) {
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.key);
  }
}

// console.log(postOrder(root));

//todo: Height of binary tree ;
//number of node in the longest path from root to leaf

const heightOfTree = (root) => {
  if (root == null) return 0;
  else {
    let lh = heightOfTree(root.left);
    let lr = heightOfTree(root.right);
    return Math.max(lh, lr) + 1;
  }
};

// console.log(heightOfTree(root);

/* 
// x 
todo: Print nodes at distance k from root ;
*/

function printNodeAtK(root, k) {
  if (root == null) return 0;
  if (k == 0) console.log(root.key);
  else {
    printNodeAtK(root.left, k - 1);
    printNodeAtK(root.right, k - 1);
    return;
  }
}

// console.log(printNodeAtK(root, 2)); // take root level as 0th index

// todo : "Breadth First search" OR "Level order Traversal" ;
// upar se neechee print karna h ;

//? way1 :height + print at k distance

function BFSEasy(root) {
  const height = heightOfTree(root);

  let k = 0;
  while (k <= height) {
    printNodeAtK(root, k);
    k++;
  }
  return;
}
// BFSEasy(root);

//? Way2 : BFS using Queue

class Queue {
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
    this.front++;
    if (this.front > this.rear) {
      this.front = this.rear = -1;
    }
    return res;
  }
  isEmpty() {
    return this.front === -1;
  }
  size() {
    return this.rear - this.front + 1;
  }
}

function bfsQueue(root) {
  if (root == null) return;
  let q = new Queue();
  q.enque(root);
  while (!q.isEmpty()) {
    let curr = q.deque();
    console.log(curr.key);
    if (curr.left !== null) q.enque(curr.left);
    if (curr.right !== null) q.enque(curr.right);
  }
}

// bfsQueue(root);

/* 
todo: maximum in binary tree ;
ways: 1. recursive
2. do level order traversal and store value of maximum root.key
*/

function findMaxRec(root) {
  if (root === null) return -1; // assuming all value in tree is positive ;
  return Math.max(root.key, findMaxRec(root.left), findMaxRec(root.right));
}

// console.log(findMaxRec(root));

function findMaxWayII(root) {
  if (root == null) return;
  let max = Number.NEGATIVE_INFINITY;
  let q = new Queue();
  q.enque(root);
  while (!q.isEmpty()) {
    let curr = q.deque();
    max = Math.max(max, curr.key);
    if (curr.left !== null) q.enque(curr.left);
    if (curr.right !== null) q.enque(curr.right);
  }
  return max;
}

// console.log(findMaxWayII(root));
/* 
todo Size of Tree : total number of nodes in a tree ; 
*/

function sizeOfTree(root) {
  if (root == null) return;
  let q = new Queue();
  q.enque(root);
  let count = 0;
  while (!q.isEmpty()) {
    let curr = q.deque();
    count++;
    if (curr.left !== null) q.enque(curr.left);
    if (curr.right !== null) q.enque(curr.right);
  }
  return count;
}
// console.log(sizeOfTree(root));

function sizeRec(root) {
  if (root == null) return 0;
  return 1 + sizeOfTree(root.left) + sizeOfTree(root.right);
}

// console.log(sizeRec(root));

class Solution {
  constructor() {
    this.res = [];
  }
  //Function to store the zig zag order traversal of tree in a list.
  zigZagTraversal(root) {
    let height = this.heightoftree(root);
    let i = 0;
    while (i <= height) {
      //even
      if (i % 2 !== 0) {
        this.printNodeAtkEven(root, i);
      } else {
        //odd
        this.printNodeAtkOdd(root, i);
      }
      i++;
    }
    return this.res;
  }

  heightoftree(root) {
    if (root == null) return 0;
    return (
      Math.max(this.heightoftree(root.left), this.heightoftree(root.right)) + 1
    );
  }
  printNodeAtkOdd(root, k) {
    if (root == null) return 0;
    if (k == 0) return this.res.push(root.key);
    else {
      this.printNodeAtkOdd(root.left, k - 1);
      this.printNodeAtkOdd(root.right, k - 1);
      return;
    }
  }
  printNodeAtkEven(root, k) {
    if (root == null) return 0;
    if (k == 0) return this.res.push(root.key);
    else {
      this.printNodeAtkEven(root.right, k - 1);
      this.printNodeAtkEven(root.left, k - 1);
      return;
    }
  }
}
let rootGfg = new Node(1);
rootGfg.left = new Node(2);
rootGfg.right = new Node(3);
rootGfg.left.right = new Node(5);
rootGfg.left.left = new Node(4);
rootGfg.right.left = new Node(6);
rootGfg.right.right = new Node(7);

let nose = new Solution();
console.log(nose.zigZagTraversal(rootGfg));
