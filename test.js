function x(boxWeight) {
  //sort
  boxWeight.sort((a, b) => a - b);

  let elevator = 0;
  let i = 0;
  let j = boxWeight.length - 1;

  while (i <= j) {
    if (boxWeight[i] + boxWeight[j] <= 150) {
      i++;
    }
    j--;
    elevator++;
  }
  return elevator;
}
let boxWeights = [50, 100, 50, 100, 50];
console.log(x(boxWeights));
