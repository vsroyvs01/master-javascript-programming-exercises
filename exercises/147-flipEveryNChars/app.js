function flipEveryNChars(input, n) {
    // your code here
        
    let array = [];
    let invertido = "";
    let iterador = n;
    for (let i = 0; i < input.length; i+=n) {
        
        for (let j = iterador - 1; j >= i; j--) {
            array.push(input[j]); 
        }
        iterador += n; 
    }
    return invertido = array.join("");
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
