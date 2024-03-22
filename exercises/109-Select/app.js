// Write your function here
function select(array, object) {
    let newObject = {};
    Object.keys(object).forEach(key => {
        array.forEach(element => {
            if (key == element) {
                newObject[key] = object[key];
            }
        });
    });
    return newObject;
}
let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }