function transformEmployeeData(array) {
  // your code here
  let newArray = [];
  
  array.forEach(arr => {
    let obj = {};
    arr.forEach(pair => {
      obj[pair[0]] = pair[1];
    });
    newArray.push(obj);
  });
  return newArray;
}
let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]
