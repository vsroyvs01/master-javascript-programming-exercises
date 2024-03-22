function getLongestElement(arr) {
    // your code here
    if (arr.length == 0) {
        return "";
    }
    let max = "";
    arr.forEach(element => {
       if (element.length > max.length) {
            max = element
       } 
    });
    return max;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
