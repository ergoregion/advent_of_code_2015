let md5 = require('js-md5');

// Example: Calculate the MD5 hash of a string
function determineHash (integer){
    let input = `iwrupvqb${integer}`;
    let hash = md5(input);
    return hash.startsWith('000000')
}


let trial = 0;
while (!determineHash(trial)){
    trial += 1
}
console.log(trial)