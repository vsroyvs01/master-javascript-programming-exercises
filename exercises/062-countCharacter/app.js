function countCharacter(str, char) {
    // your code here
    let time = 0;
    for (let index = 0; index < str.length; index++) {
        if (str[index] === char){
            time += 1;
        }
        
    }
    return time;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
