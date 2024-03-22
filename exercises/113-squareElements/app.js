function squareElements(arr) {
  // your code here
  let newArray = arr.map(element => Math.pow(element, 2));
  return newArray;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
