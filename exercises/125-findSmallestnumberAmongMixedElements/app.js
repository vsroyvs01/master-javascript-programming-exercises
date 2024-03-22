function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if (arr.length == 0){
    return 0;
  }
  let aux = 0;
  arr.forEach(element => {
      if (typeof(element) === "number"){
          if (aux == 0 || element < aux) {
              aux = element
          }
      }
  });
return aux;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
