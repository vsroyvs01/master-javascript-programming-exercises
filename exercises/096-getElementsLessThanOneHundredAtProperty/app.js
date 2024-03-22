// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return [];
    }
    let array = obj.key.filter((item) => item < 100);
    return array;
}

let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]