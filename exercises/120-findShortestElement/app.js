function findShortestElement(arr) {
    // your code here
    if (arr.length == 0) {
        return "";
    }
    let min = arr[0];
    arr.forEach(element => {
       if (element.length < min.length) {
            min = element;
       } 
    });
    return min;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'