function removeArrayValues(object) {
    // your code here
    for (const key in object) {
        if (Array.isArray(object[key]) ) {
          delete object[key];
    
        }
      }
    return object;
}

let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
  removeArrayValues(obj);
  console.log(obj); // --> { b: 2 }