function fromListToObject(array) {
  // your code here
  let newObj = {};
  array.forEach(pair => {
     newObj[pair[0]] = pair[1];
  });
  return newObj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
