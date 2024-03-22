function getEvenElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
    return [];
  }
  let array = obj.key.filter((item) => item % 2 == 0);
  return array;
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
