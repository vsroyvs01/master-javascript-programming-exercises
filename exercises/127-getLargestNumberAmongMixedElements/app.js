function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (arr.length == 0){
        return 0;
      }
      let aux = 0;
      arr.forEach(element => {
          if (typeof(element) === "number"){
              if (aux == 0 || element > aux) {
                  aux = element
              }
          }
      });
    return aux;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
