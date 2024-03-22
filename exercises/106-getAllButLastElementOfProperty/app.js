function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
      return [];
    }
    let newArray = [];
    obj.key.forEach(element => {
      if (element !== obj.key[obj.key.length - 1]){
        newArray.push(element);
      }
    });
    return newArray;
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
