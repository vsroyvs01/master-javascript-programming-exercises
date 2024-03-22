// Write your function here
function keep(array, element) {
    let newArray = array.filter((item) => item == element);
    return newArray;
}

let output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]