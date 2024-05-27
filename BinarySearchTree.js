//  ?  :  there is an order in putting value inside a binary search tree ; we cannot put randomly like tree ds ,
//  ?  :  for every node , keys in left are smaller and keys on right side are greater ;

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

const inorder = (root) => {
  if (root) {
    inorder(root.left);
    console.log(root.key);
    inorder(root.right);
  }
};

const insert = (node, key) => {
  if (!node) {
    return new Node(key);
  }
  if (key < node.key) {
    node.left = insert(node.left, key);
  } else {
    node.right = insert(node.right, key);
  }
  return node;
};

const minValueNode = (node) => {
  let current = node;
  while (current.left) {
    current = current.left;
  }
  return current;
};

const deleteNode = (root, key) => {
  if (!root) {
    return null;
  }
  if (key < root.key) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    }
    let temp = minValueNode(root.right);
    root.key = temp.key;
    root.right = deleteNode(root.right, temp.key);
  }
  return root;
};
/* 
let root = null;
root = insert(root, 50);
root = insert(root, 30);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 70);
root = insert(root, 60);
root = insert(root, 80);

console.log("Inorder traversal of the given tree");
inorder(root);

console.log("Delete 20");
root = deleteNode(root, 20);
console.log("Inorder traversal of the modified tree");
inorder(root);

console.log("Delete 30");
root = deleteNode(root, 30);
console.log("Inorder traversal of the modified tree");
inorder(root);

console.log("Delete 50");
root = deleteNode(root, 50);
console.log("Inorder traversal of the modified tree");
inorder(root);
 */
class BinaryTree {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

let root = new BinaryTree(10);
root.left = new BinaryTree(5);
root.right = new BinaryTree(20);
root.left.right = new BinaryTree(7);
// console.log(root);

/*
! time complexity : O(h) : height of tree  , aux space :O(h) , auxilary space for recursive call stack */

function addinBSTRec(root, x) {
  if (root == null) return new BinaryTree(x);
  else if (root.key === x) return root;
  else if (x > root.key) root.right = addinBSTRec(root.right, x);
  else if (x < root.key) root.left = addinBSTRec(root.left, x);
  return root;
}
addinBST(root, 6);
addinBST(root, 2);
addinBST(root, 1);
// console.log(root.left);
// console.log(root);

//! time complexity : O(h) : height of tree  , aux space :O(1)

// par = parent to get control of the previos node of the null node , usi ke tou left m ya right m lagyege
function addinBST(root, x) {
  let par = null; // par = parent to get control of the previos node of the null node , usi ke tou left m ya right m lagyege
  let curr = root;
  while (curr != null) {
    par = curr; // get hold of parent node
    if (curr.key == x) return root; // if x already exist , then no changes;
    else if (curr.key < x) curr = curr.right;
    else curr = curr.left;
  }
  if (par == null) return new BinaryTree(x);
  // if the tree is empty , thats the only case where the parent will be null
  else if (par.key > x) par.left = new BinaryTree(x);
  else par.right = new BinaryTree(x);
  return root;
}

/*       
todo : search in Binary search Tree ;
use bst conventions ;
*/
// time complexity  : O(h) , aux space: O(h) recursive call stack ,
// all the function calls will be stored in call stack  ,so auxilary space will be O(h),number of time we are calling those funcitons

function searchInBstRec(root, target) {
  if (root == null) return false;
  if (root.key == target) return true;
  else if (root.key > target) return searchInBstRec(root.left, target);
  else if (root.key < target) return searchInBstRec(root.right, target);
}
// console.log(root)
// console.log(searchInBstRec(root, 1)); // true
// console.log(searchInBstRec(root, 11)); // false

// time : O(h) ; space:O(1)
function searchInBst(root, target) {
  while (root != null) {
    if (root.key == target) return true;
    else if (root.key > target) root = root.left;
    else if (root.key < target) root = root.right;
  }
  return false;
}
// console.log(searchInBst(root, 11));
// console.log(searchInBst(root, 9));

/* 
deletion operation in binary search tree, 
2 cases: 
1. its a leaf node ;
2. what if its not leaf node ,node has children
    i: it has only one child ;
    ii: it has both child , 
*/

function bstDeleteleaf(root, target) {
  if (root == null) return null;
  if (root.key > target) root.left = bstDeleteleaf(root.left, target);
  else if (root.key < target) root.right = bstDeleteleaf(root.right, target);
  else if (root.key === target) {
    if (root.left === null) return root.right;
    else if (root.right === null) return root.left;
    else {
      let successor = getSuccessor(root.right); // root.right always exist , as already checked above
      root.key = successor.key;
      root.right = bstDeleteleaf(root.right, successor.key);
    }
  }
  return root;
}

// we are getting the left most node, means the smallest value in the bs tree
function getSuccessor(curr) {
  while (curr.left !== null) {
    curr = curr.left;
  }
  return curr;
}

// console.log(root.left);
// console.log(bstDeleteleaf(root, 5));
// console.log(root);

/* 
todo : Floor value in a BST ;
find the floor value of target ; it is not necessary to have target value in the BST
we are not using recursive because it will take auxilary space ;
here in iterative solution time:O(h) and aux space null ; space complexity : O(1)
*/
function floorValueBst(root, target) {
  let res = null;
  if (root === null) return null;
  while (root !== null) {
    if (root.key == target) return root.key;
    else if (root.key > target) root = root.left;
    else if (root.key < target) {
      res = root.key;
      root = root.right;
    }
  }
  return res;
}

// console.log(floorValueBst(root, 8));
