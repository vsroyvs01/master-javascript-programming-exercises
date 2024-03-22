function getAllKeys(obj) {
  // your code here
  let keyArray = [];
  for (let [key, value] of Object.entries(obj)) {
    keyArray.push(key);
  }
  return keyArray;
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
