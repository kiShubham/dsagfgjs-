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
