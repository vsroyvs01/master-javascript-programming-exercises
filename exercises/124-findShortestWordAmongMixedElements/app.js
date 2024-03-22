function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0){
        return "";
    }
    let aux = "";
    arr.forEach(element => {
        if (typeof(element) === "string"){
            if (aux === "" || element.length < aux.length) {
                aux = element
            }
        }
    });
    return aux;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
