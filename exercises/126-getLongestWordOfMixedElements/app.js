function getLongestWordOfMixedElements(arr) {
    // your code here
    if (arr.length == 0){
        return "";
    }
    let aux = "";
    arr.forEach(element => {
        if (typeof(element) === "string"){
            if (aux === "" || element.length > aux.length) {
                aux = element
            }
        }
    });
    return aux;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
