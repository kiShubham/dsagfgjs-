/*
 * In binary seach tree we make use of Recursive function and
 *  should always handle the corner cases first as base case;
 * first study queue ds ;
 */

class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(30);
root.left = new Node(40);
root.right = new Node(50);
root.left.left = new Node(70);
root.left.right = new Node(90);
root.right.left = new Node(60);
root.right.right = new Node(80);

/* 
todo: Inorder traversal ;
prints
left right root left right
*/

//O(n) number of node; time , aux: O(h+1)
function inOrder(root) {
  if (root != null) {
    inOrder(root.left);
    console.log(root.key);
    inOrder(root.right);
  }
}

// console.log(inOrder(root)); //70 40 30 60 50 80

/* 
todo : preOrder traversal ;
prints 
root left right
*/
//O(n) number of node; time , aux: O(h)

function preOrder(root) {
  if (root !== null) {
    console.log(root.key);
    preOrder(root.left);
    preOrder(root.right);
  }
}

// console.log(preOrder(root));// 30 40 70 90 50 60 80

/* 
todo : postOrder traversal ;
print 
? the left subtree -> the right subtree -> the root
*/

function postOrder(root) {
  if (root !== null) {
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.key);
  }
}

// postOrder(root); // 70 90 40 60 80 50 30

/* 
todo : height of binary tree ;

*/

/* 
? there are two convention of measuring height, 
? 1. height is defined by "number of nodes from root to any side (left or right which max nodes) ;
*/
// time O(n) ,n represent node, we have traverse on every node exactly once ;

function heightOfTree(root) {
  if (root == null) return 0;
  else {
    let lh = heightOfTree(root.left);
    let rh = heightOfTree(root.right);
    return Math.max(lh, rh) + 1;
  }
}

// console.log(heightOfTree(root)); // 3

function heightOfTreeSimp(root) {
  if (root === null) return 0;
  else
    return (
      Math.max(heightOfTreeSimp(root.left), heightOfTreeSimp(root.right)) + 1
    );
}

// console.log(heightOfTreeSimp(root)); //3

/* 
? 2. height is defined by number edges in leading child of the binary tree ; in this case we dont count root  ,
if only root is given like no child at all, then height is 0 ;
if value of root is null then height is -1 ;
*/
function heightOfTreeEdges(root) {
  if (root == null) return -1;
  else {
    return (
      Math.max(heightOfTreeEdges(root.left), heightOfTreeEdges(root.right)) + 1
    );
  }
}

// console.log(heightOfTreeEdges(root)); // 2

/* 

todo: Print nodes at distance k ;
? notes : Nodes that are at distance k from root are at distance k-1 from its children ;

*/

//time- O(n)  space-O(h)
function nodesAtDistanceK(root, k) {
  if (root == null) return;
  if (k == 0) return console.log(root.key);
  else {
    nodesAtDistanceK(root.left, k - 1);
    nodesAtDistanceK(root.right, k - 1);
  }
}

// nodesAtDistanceK(root, 2);

/* 
todo: "breadth First Search" of Binary tree
? it is also known as "Level order Travesal"

* so we are given a binary tree we have to print all nodes of it in leve order fashion ;
* starting from root then print at level one and so on ;
*/

/* 
! smart ways:
?1. first find the height of binary tree , then use the function Print nodes at Distance k ;
it is inEffecient solution as it is taking so much time ;

?2.use Queue data Structure ; O(n)
*/

// total time : O( h + n*h )
function bfsOneWay(root) {
  const height = heightOfTreeEdges(root); //time : Θ(h)
  let k = 0;

  //time of while in total :- O(n*h)
  while (k <= height) {
    //O(h) , h times as it depends on height
    nodesAtDistanceK(root, k); //O(n)
    k++;
  }
  return;
}
// bfsOneWay(root);

//making Queue , for implementing bfs ;
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

function printLevel(root) {
  if (root == null) return;
  let q = new Queue();
  q.enque(root);
  while (!q.isEmpty()) {
    //O(height of tree)
    let curr = q.deque(); //O(1)
    console.log(curr.key);
    if (curr.left !== null) q.enque(curr.left); //O(1) remember both have if condition and not if else ;
    if (curr.right !== null) q.enque(curr.right); //O(1)
  }
}
// printLevel(root);

/*
!Bfs : Breadth First Search 
? level order traversal line by line ; // 
*/

/* 
* way 1
O(n+h); n for every node, h because ,we are inserting "null" at each level ;
auxilary space : Θ(width of tree)
*/
function printLevelLineByLine(root) {
  let ans = "";
  if (root == null) return;
  let q = new Queue();
  q.enque(root);
  q.enque(null);

  while (q.size() > 1) {
    let curr = q.deque();
    if (curr == null) {
      ans += "\n";
      q.enque(null);
      // continue;
    } else {
      ans += curr.key + "  ";
      if (curr.left !== null) q.enque(curr.left); //O(1) remember both have if condition and not if else ;
      if (curr.right !== null) q.enque(curr.right); //O(1)
    }
  }
  return ans;
}
//  both result same

function printLevelLineByLineS(root) {
  let ans = "";
  if (root == null) return;
  let q = new Queue();
  q.enque(root);
  q.enque(null);

  while (q.size() > 1) {
    let curr = q.deque();
    if (curr == null) {
      ans += "\n";
      q.enque(null);
      continue;
    }
    ans += curr.key + "  ";
    if (curr.left !== null) q.enque(curr.left); //O(1) remember both have if condition and not if else ;
    if (curr.right !== null) q.enque(curr.right); //O(1)
  }
  return ans;
}
// by using continue keyword , that particular loop where curr==null,
// will be ended and next loop will be started ;

// console.log(printLevelLineByLineS(root));

/* 

* way 2 ;
count nodes on every level ;
we mainly run inner loop count times ;
we are inserting every node exactly once inside the queue 
and we are taking out every node exactly once outside the queue;
All operations is O(1) in queue;
the loop is taking exactly n loop so 
timecomplexity : Θ(n)
auxilary space : Θ(width of Tree)
*/

function printLevelWayII(root) {
  let ans = "";
  if (root == null) return ans;
  let q = new Queue();
  q.enque(root);
  while (!q.isEmpty()) {
    let count = q.size();
    for (let i = 0; i < count; i++) {
      //i<q.size() will not work , because simaultaneosly changing
      let curr = q.deque();
      ans += curr.key + " ";
      if (curr.left != null) q.enque(curr.left);
      if (curr.right != null) q.enque(curr.right);
    }
    ans += "\n";
  }
  return ans;
}
// console.log(printLevelWayII(root));

/* 

? find the maximum in the tree ?
2 ways : recursive and iterative ;

*/
// time : Θ(n) , space : Θ(h) ; height of the tree

function getMax(root) {
  if (root === null) {
    return Number.NEGATIVE_INFINITY;
  }
  return Math.max(root.key, getMax(root.left), getMax(root.right));
}
// console.log(getMax(root));//90

function getMaxIterative(root) {
  let max = Number.NEGATIVE_INFINITY;
  if (root == null) return max;
  max = root.key;
  let q = new Queue();
  q.enque(root);
  while (!q.isEmpty()) {
    let count = q.size();
    for (let i = 0; i < count; i++) {
      let curr = q.deque();
      max = Math.max(max, curr.key);
      if (curr.left !== null) q.enque(curr.left);
      if (curr.right !== null) q.enque(curr.right);
    }
  }
  return max;
}
// console.log(getMaxIterative(root));//90

/* 
! size of the Binary tree ;size: Number of Node in tree (of course including root)
2 ways : recursive and iterative ;

*/

//time : Θ(n) and space : Θ(h)
function sizeOfTreeRecursive(root) {
  if (root == null) return 0;
  return 1 + sizeOfTreeRecursive(root.left) + sizeOfTreeRecursive(root.right);
}

function sizeOfTreeIterative(root) {
  let size = 0;
  if (root == null) return size;
  let q = new Queue();
  q.enque(root);
  size++;
  while (!q.isEmpty()) {
    let count = q.size();
    for (let i = 0; i < count; i++) {
      let curr = q.deque();
      // max = Math.max(max, curr.key);
      size++;
      if (curr.left !== null) q.enque(curr.left);
      if (curr.right !== null) q.enque(curr.right);
    }
  }
  return size - 1;
}
// console.log(sizeOfTreeIterative(root));
