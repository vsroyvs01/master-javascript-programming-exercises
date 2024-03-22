// Write your function here
function getNthElementOfProperty(obj, key, number) {
    if (!obj[key] || number >= obj[key].length || !Array.isArray(obj[key])) {
        return undefined;
    }
    return obj.key[number];
}
let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2