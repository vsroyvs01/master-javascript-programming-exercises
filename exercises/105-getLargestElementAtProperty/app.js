function getLargestElementAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
      return [];
    }
    let max = obj.key[0];
    obj.key.forEach(element => {
      if (element > max){
        max = element;
      }
    });
    return max;
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
