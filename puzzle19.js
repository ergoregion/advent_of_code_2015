
const fs = require('fs');
const assert =  require('assert');
const { log } = require('console');

// Read the file synchronously
const data = fs.readFileSync('puzzle19-data.txt', 'utf8');
const strings=data.split('\n');


start = "CRnCaCaCaSiRnBPTiMgArSiRnSiRnMgArSiRnCaFArTiTiBSiThFYCaFArCaCaSiThCaPBSiThSiThCaCaPTiRnPBSiThRnFArArCaCaSiThCaSiThSiRnMgArCaPTiBPRnFArSiThCaSiRnFArBCaSiRnCaPRnFArPMgYCaFArCaPTiTiTiBPBSiThCaPTiBPBSiRnFArBPBSiRnCaFArBPRnSiRnFArRnSiRnBFArCaFArCaCaCaSiThSiThCaCaPBPTiTiRnFArCaPTiBSiAlArPBCaCaCaCaCaSiRnMgArCaSiThFArThCaSiThCaSiRnCaFYCaSiRnFYFArFArCaSiRnFYFArCaSiRnBPMgArSiThPRnFArCaSiRnFArTiRnSiRnFYFArCaSiRnBFArCaSiRnTiMgArSiThCaSiThCaFArPRnFArSiRnFArTiTiTiTiBCaCaSiRnCaCaFYFArSiThCaPTiBPTiBCaSiThSiRnMgArCaF"

changes = []

for (const s of strings){
    const instructions = s.split(' ');
    changes.push([instructions[0], instructions[2].trim()])
}
results =  new Set()


for (let i=0;i<start.length;i++){

for (const c of changes){
    if (start.slice(i, i+c[0].length) == c[0]){
        const created = start.slice(0, i) + c[1] + start.slice(i+c[0].length)
        results.add(created)
    }
}

}

console.log(results.size)

// sort changes based on the lenth of the secondd element
changes.sort(function(first, second) {
        return second[1].length - first[1].length;
    });

const target = "e"

let best_count = 100000000

function rec(current, count){
    if (best_count == 100000000)console.log(current)
    if(current == target && count < best_count){
        console.log("current: " + current +" count: "+ count)
        best_count = count
    }
    for (const c of changes){
        for (let i=0;i<current.length;i++){
            if (current.slice(i, i+c[1].length) == c[1]){
            const created = current.slice(0, i) + c[0] + current.slice(i+c[1].length)
            rec(created, count+1)
        }
        }
    }
}

rec(start, 0)