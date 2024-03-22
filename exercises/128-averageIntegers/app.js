function average(arr) {
  // your code here
  return sum(arr)/arr.length;
}

function sum(arr) {
  // your code here
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum;
}

console.log(average([1, 2])); // --> 1.5
