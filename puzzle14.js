const fs = require('fs');
const assert =  require('assert');
const { log } = require('console');

// Read the file synchronously
const data = fs.readFileSync('puzzle14-data.txt', 'utf8');
const strings=data.split('\n');


function interpretLine(string){
    const instructions = string.split(' ');
    let subject = instructions[0]
    let speed = parseInt(instructions[3], 10)
    let duration = parseInt(instructions[6], 10)
    let rest = parseInt(instructions[13], 10)
    return [subject, speed, duration, rest]
}

let deer = []

for (const s of strings){
    deer.push(interpretLine(s))
}
console.log(deer)

function distance(deer, total_time){
    let time = 0
    let distance = 0
    const speed = deer[1]
    const duration = deer[2]
    const rest = deer [3]
    while (time<total_time){
        for (let i=0;i<duration;i++){
            time ++
            distance += speed
            if(time == total_time) {return distance}
        }
        time += rest
        if(time >= total_time) {return distance}
    }
    return distance
}


max =0
for (const d  of deer){
    dist = distance(d, 2503)
    console.log(d[0], dist)
    if (dist>max) max = dist
}

console.log(max)

scores = {}
distances = {}

for (const d  of deer){
    scores[d[0]] =0
    distances[d[0]] =0
}


for (let i=1;i<=2503;i++){
    let max = 0
    for (const d  of deer){
        dist = distance(d, i)
        distances[d[0]] = dist
        if (dist>max) max = dist
    }
    for (const d  of deer){
        dist = distance(d, i)
        if (dist==max) scores[d[0]]++
    }
}
console.log(scores)

max =0
for (const d  of deer){
    if (scores[d[0]]>max) max = scores[d[0]]
}
console.log(max)