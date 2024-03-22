function flipPairs(input) {
    // your code here
    let array = [];
    let invertido = "";
    for (let i = 0; i < input.length; i+=2) {
        let aux = i + 1;
        array.push(input[aux]);
        array.push(input[i]); 
    }
    return invertido = array.join("");
}

let input = "hola conejo";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
