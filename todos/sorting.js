//****************************************************************************************** */
//!***********************************   Sorting   ****************************************** */

/* 
?bubble sort ;
?selection sort ;
?insertion sort ;
?Merge sort ;
?Quick sort ;
*/

//todo: bubble sort

// time : O(n) , space: O(1)
let arr = [10, 5, 2, -7];
const arr2 = [12, 11, 13, 5, 6, 7];

const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr; //inplace
};

// console.log(bubbleSort(arr));

//todo: selection sort :
/* 
we found the minimum element then we put that in 1st index and 2nd minimum to 2nd index
*/
// Θ(n2)
const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min_index = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
  }
  return arr;
};
// console.log(selectionSort(arr));

// todo: Insertion Sort :
//O(n2) ; O(n) best case if sorted , will not enter while loop,worst Θ(n2) ; fully reverse sorted array;
const insertionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};
// console.log(insertionSort(arr));

//todo: Merge sort ;O(nlogn)
//high here is the arr.length-1 ;
function mergeSort2(arr, low, high) {
  if (low == high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort2(arr, low, mid);
  mergeSort2(arr, mid + 1, high);
  merge2(arr, low, mid, high);
}

//[low ............. mid] ; [mid+1 .............. high]

function merge2(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  //   return temp;
  //   console.log(temp);
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function amb(arr) {
  mergeSort2(arr, 0, arr.length - 1);
  return arr;
}
console.log(amb(arr2));
////

/*







*/
/* 
const mergeSort = (arr, low, high) => {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
};

const merge = (arr, low, mid, high) => {
  let n1 = mid - low + 1;
  let n2 = high - mid;
  let left = [];
  let right = [];
  for (let i = 0; i < n1; i++) {
    left.push(arr[low + i]);
  }
  for (let i = 0; i < n2; i++) {
    right.push(arr[mid + i + 1]);
  }
  
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    if (left[i] <= right[i]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < n1) {
    arr[k] = right[j];
    j++;
    k++;
  }
};

mergeSort(arr2, 0, arr.length - 1);
console.log("Sorted array: ", arr2);
 */

// Quick sort
