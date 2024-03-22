function getLargestElement(arr) {
  // your code here
  if (arr.length == 0) {
    return 0;
  }
  max = arr[0];
  arr.forEach(element => {
    if (element > max){
      max = element;
    }
  });
  return max;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;