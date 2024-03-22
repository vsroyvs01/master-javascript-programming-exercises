function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
    return 0;
}
let sum = 0;
obj.key.forEach(element => {
  sum += element;
});
return sum/obj.key.length;
}