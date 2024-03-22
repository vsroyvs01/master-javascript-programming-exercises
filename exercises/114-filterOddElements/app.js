function filterOddElements(arr) {
  // your code here
  let newArray = arr.filter(element => element % 2 == 1);
  return newArray
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
