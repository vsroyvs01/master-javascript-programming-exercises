function removeEvenValues(object) {
    // your code here
    for (const key in object) {
      if (typeof object[key] === 'number' && object[key] % 2 == 0) {
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
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
