function listAllValues(obj) {
  // your code here
  let valueArray = Object.values(obj);
  return valueArray;
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
