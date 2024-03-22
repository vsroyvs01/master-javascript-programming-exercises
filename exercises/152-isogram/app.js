function isIsogram(text) {
  // your code here
  text = text.toLowerCase()
  for (let i = 0; i < text.length; i++) {
    for (let j = i+1; j < text.length; j++) {
      if (text[i] === text[j]) return false;
    }
  }
  return true;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
