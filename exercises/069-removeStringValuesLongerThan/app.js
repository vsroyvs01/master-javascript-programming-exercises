function removeStringValuesLongerThan(num, object) {
  // your code here
  for (const key in object) {
    if (typeof object[key] === 'string' && object[key].length > num) {
      delete object[key];

    }
  }
  return object;
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
