function removeStringValues(object) {
    // your code here
    for (const key in object) {
        if (typeof object[key] === 'string') {
          delete object[key];
    
        }
      }
    return object;
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
