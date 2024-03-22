function convertObjectToList(obj) {
  // your code here
  let matrix = [];
  for (let [key, value] of Object.entries(obj)) {
    matrix.push([key, value])
  }
  return matrix;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
