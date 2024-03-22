function joinArrayOfArrays(arr) {
  // your code here
  let result = [];
  arr.forEach(subArray => {
      subArray.forEach(element => {
          result.push(element);
      });
  });
  return result;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
