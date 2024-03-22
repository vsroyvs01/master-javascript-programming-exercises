function findLongestPalindrome(sentence) {
  // your code here
  let longestPalindrome = "";
  for (let i = 0; i < sentence.length; i++) {
    let word = "";
    for (let j = i; j < sentence.length; j++) {
      word += sentence[j];
      if (isPalindrome(word) && word.length > longestPalindrome.length) {
        longestPalindrome = word;
      }
    } 
  }
  return longestPalindrome;
}

function reverseString(string) {
  // your code here
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse +=string[i];
  }
  return reverse;
}

function isPalindrome(word) {
  // your code here
  if (word.length > 1 && word.toLowerCase() === reverseString(word.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(reverseString(output)+" hola\n");
console.log(output); // --> "a racecar a"
