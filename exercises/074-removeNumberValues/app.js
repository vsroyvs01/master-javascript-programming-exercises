function removeNumberValues(object) {
    // your code here
    for (const key in object) {
        if (typeof object[key] === 'number') {
          delete object[key];
    
        }
      }
      return object;
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
