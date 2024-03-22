function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
      if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
          return [];
      }
      let array = obj.key.filter((item) => item.length % 2 == 0);
      return array;
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
