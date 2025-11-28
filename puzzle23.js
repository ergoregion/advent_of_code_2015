const fs = require('fs');
const assert =  require('assert');
const { log } = require('console');

// Read the file synchronously
const data = fs.readFileSync('puzzle23-data.txt', 'utf8');
const strings=data.split('\n');
console.log(strings)

registers = {"a": 0, "b":0}

console.log(registers)

current_instruction = 0

function process_instruction(string){
    const parts = string.trim().split(' ');
    console.log(parts[0])
    if(parts[0] == "hlf") {registers[parts[1]] /= 2; current_instruction++}
    else if(parts[0] == "tpl") {registers[parts[1]] *= 3; current_instruction++}
    else if(parts[0] == "inc") {registers[parts[1]] +=1; current_instruction++}
    else if(parts[0] == "jmp") {
        current_instruction += parseInt(parts[1])}
    else if(parts[0] == "jie"){
        r = parts[1].replace(',', '')
        if(registers[r] % 2 == 0) current_instruction += parseInt(parts[2])
        else current_instruction++
    }
    else if(parts[0] == "jio"){
        r = parts[1].replace(',', '')
        if(registers[r] == 1) current_instruction += parseInt(parts[2])
        else current_instruction++
        }
}

while(current_instruction < strings.length){
    console.log(current_instruction)
    process_instruction(strings[current_instruction])
}

console.log(registers["a"], registers["b"])