const fs = require('fs');
const assert =  require('assert');
const { log } = require('console');

// Read the file synchronously
const data = fs.readFileSync('puzzle15-data.txt', 'utf8');
const strings=data.split('\n');


function interpretLine(string){
    const instructions = string.split(' ');
    let subject = instructions[0]
    let capacity = parseInt(instructions[2], 10)
    let durability  = parseInt(instructions[4], 10)
    let flavor  = parseInt(instructions[6], 10)
    let texture  = parseInt(instructions[8], 10)
    let calories  = parseInt(instructions[10], 10)
    return [subject, capacity, durability, flavor, texture, calories]
}


let options = []

for (const s of strings){
    options.push(interpretLine(s))
}
console.log(options)

usage = []
usage.push([options[0],44])
usage.push([options[1],56])

function score(usage){
    let capacity = 0
    let durability  = 0
    let flavor  = 0
    let texture  = 0
    let calories  = 0
    for (const d of usage){
        capacity += d[1]*d[0][1]
        durability += d[1]*d[0][2]
        flavor += d[1]*d[0][3]
        texture += d[1]*d[0][4]
        calories += d[1]*d[0][5]
    }

    capacity = Math.max(capacity,0)
    durability = Math.max(durability,0)
    flavor = Math.max(flavor,0)
    texture = Math.max(texture,0)
    calories = Math.max(calories,0)

    return [(capacity*durability*texture*flavor), calories]


}

console.log(score(usage))

max = 0

for (let i=0;i<100;i++){
    for (let j=0;j<100-i;j++){
        for (let k=0;k<100-i-j;k++){
            usage = []
            usage.push([options[0],i])
            usage.push([options[1],j])
            usage.push([options[2],k])
            usage.push([options[3],100-i-j-k])
           let s = score(usage)
           if (s[0]>max)  max = s[0]
        }
    }
}
console.log(max)


max = 0

for (let i=0;i<100;i++){
    for (let j=0;j<100-i;j++){
        for (let k=0;k<100-i-j;k++){
            usage = []
            usage.push([options[0],i])
            usage.push([options[1],j])
            usage.push([options[2],k])
            usage.push([options[3],100-i-j-k])
           let s = score(usage)
           if (s[0]>max && s[1]==500) max = s[0]
        }
    }
}
console.log(max)