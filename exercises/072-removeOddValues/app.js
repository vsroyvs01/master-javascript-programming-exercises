function removeOddValues(object) {
    // your code here
    for (const key in object) {
      if (typeof object[key] === 'number' && object[key] % 2 == 1) {
        delete object[key];
  
      }
    }
    return object;
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
