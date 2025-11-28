// Import the 'fs' module
const fs = require('fs');
const assert =  require('assert');

// Read the file synchronously
const data = fs.readFileSync('puzzle8-data.txt', 'utf8');

const strings=data.split('\n');

console.log(strings)


let code = 0
let memory = 0
for (const s of strings){
    let possible_escape = false
    let this_code = -2
    for (const c of s.trim()){
        memory += 1
        if (possible_escape & c =='\\'){
            possible_escape = false
        }
        else if (possible_escape & c =='\"'){
            possible_escape = false
        }
        else if (possible_escape & c =='x'){
            possible_escape = false
            this_code -= 2
        }
        else{
            this_code +=1
            possible_escape = (c =='\\')
        }
    }
    code += this_code
}
console.log("memory:" + memory)
console.log("code:"+code)
console.log("part1: "+(memory-code))



let expanded = 0
for (const s of strings){
    let this_expanded = 2
    for (const c of s.trim()){
        if ( c =='\"'){
            this_expanded +=2
        }
        else if ( c =='\\'){
            this_expanded +=2
        }
        else{
            this_expanded +=1
        }
    }
    expanded += this_expanded
}
console.log("expanded:"+expanded)
console.log("part2: "+(expanded-memory))