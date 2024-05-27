const binarySearch = (arr = [], target) => {
  // let supose an ascending array that is sorted ;
  let len = arr.length;
  let mid = null;
  let l = 0;
  let r = len - 1;
  let targetIndex = null;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2); //prevent overflow;
    if (arr[mid] === target) {
      //return mid
      targetIndex = mid;
      break;
    } else if (arr[mid] > target) {
      // searchleftward ;
      r = mid - 1;
    } else if (arr[mid] < target) {
      //search rightward
      l = mid + 1;
    }
  }
  return targetIndex;
};
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(array, 2)); // 1

/* todo:19 
todo:* 1Q. Ascending sorted array ❔
todo:* 2Q. Decending sorted Array || Reverse sorted array ❔
todo:* 3Q. Order Agnostic search  ❔
todo:! 4Q. 1st and Last Occurence of an Element ❔🔼 
todo:* 5Q. Count of element in a sorted Array

todo:* 6Q. Number of times sorted Array is rotated ; or index of minimum number in sorted rotated array ;
todo:  7Q. Search in Rotated Sorted Array 🔼
todo:  8Q. Searching in nearly sorted array 🔼;
todo:  9Q. Find floor of an Element in a sorted Array; 
todo: 10Q. Find ceil of an Element in a sorted Array;

todo:* 11Q. Find the position of an element in an infinite sorted Array ; ***
todo:* 12Q. Find the index of first occurrence of  "1" in Binary sorted Array ;
todo:* 13Q. Find the index of first occurrence of  "1" in INFINTE Binary sorted Array ;
todo:* 14Q. Minimum Absoulute difference element in the sorted Array for a given key ;
todo:! 15Q. Find peak element  

todo:* 16Q. Bitonic Array ,find max element ;
todo:* 17Q. Search in Bitonic Array ;
todo:! 18Q. Search in 2d array with sorted rowwise and columwise 
todo:* 19Q. Allocate Minimum Number of Pages from N books to M students .

*/
