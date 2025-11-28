// Import the 'fs' module
const fs = require('fs');
const assert =  require('assert');

// Read the file synchronously
const data = fs.readFileSync('puzzle5-data.txt', 'utf8');

const strings=data.split('\n');

// Log the length of the data
console.log(`The number of strings takes: ${strings.length}`);

function check1(string){
    let vowels = 0;
    for (const x of string){
        if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {vowels=vowels+1;}
    }
    return vowels>=3;
}


function check2(string){
    let last_char = '0';
    for (const x of string){
        if (x == last_char) {return true;}
        last_char = x;

    }
    return false;
}


function check3(string){
    if(string.split('ab').length>1) return false;
    if(string.split('cd').length>1) return false;
    if(string.split('py').length>1) return false;
    if(string.split('xy').length>1) return false;
    return true;
}

function isNice(s){
    return check1(s) && check2(s) && check3(s);
}

console.log(isNice('dvszwmarrgswjxmb'));

let niceStringCount =0;
for (const s of strings){
if(isNice(s)){
    niceStringCount += 1;
}

}
console.log(niceStringCount);




function check1b(string){
    
    for (let i=0; i<string.length-1; i=i+1){
        const char1 = string[i];
        const char2 = string[i+1];

        for (let j=i+2; j<string.length-1; j=j+1){

            if (char1==string[j] && char2==string[j+1]) {return true;}
        }
    }
    return false;
}


function check2b(string){
    for (let i=0; i<string.length-2; i=i+1){
        if (string[i]==string[i+2]) {return true;} 
    }
    return false;
}


function isNiceB(s){
    return check1b(s) && check2b(s);
}

console.log(isNiceB('ieodomkazucvgmuy'));

niceStringCount =0;
for (const s of strings){
if(isNiceB(s)){
    niceStringCount += 1;
}

}
console.log(niceStringCount);