const fs = require('fs');
const assert =  require('assert');
const { log } = require('console');

// Read the file synchronously
const data = fs.readFileSync('puzzle16-data.txt', 'utf8');
const strings=data.split('\n');


function sue(string){
    const instructions = string.split(' ');
    facts ={}
    facts[instructions[2]] = parseInt(instructions[3], 10)
    facts[instructions[4]] = parseInt(instructions[5], 10)
    facts[instructions[6]] = parseInt(instructions[7], 10)
    return [instructions[1], facts]

}

console.log(sue(strings[0]))

let certainties = {
    'children:': 3,
'cats:' : 7,
'samoyeds:' : 2,
'pomeranians:' : 3,
'akitas:' : 0,
'vizslas:' : 0,
'goldfish:' : 5,
'trees:' : 3,
'cars:':  2,
'perfumes:': 1,
}

console.log(certainties)

for (const s of strings){
    possible = true
    let f = sue(s)
    for (const a in f[1]){
        if (f[1][a] != certainties[a]) possible = false
    }
    if(possible) console.log(f[0])

}


for (const s of strings){
    possible = true
    let f = sue(s)
    for (const a in f[1]){
        test = true
        if (a=='cats:' || a=='trees:') test = f[1][a] > certainties[a]
        else if (a=='pomeranians:' || a=='goldfish:') test = f[1][a] < certainties[a]
        else  test = f[1][a] == certainties[a]
        if (!test) possible = false
    }
    if(possible) console.log(f[0])


}