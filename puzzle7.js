// Import the 'fs' module
const fs = require('fs');
const assert =  require('assert');

// Read the file synchronously
const data = fs.readFileSync('puzzle7-data.txt', 'utf8');

const strings=data.split('\n');

console.log(strings)

log = {}

function get_value(string,log){
    if(!isNaN(parseInt(string, 10))){
        return parseInt(string, 10)& 0xFFFF
    }
    if(string in log){
        return log[string]
    }
    return NaN

}


function interpretInstruction(string, log){
    const instructions = string.split(' ');
    if (instructions[1] == '->'){
        let number = get_value(instructions[0], log)
        if(!isNaN(number)){
        let key = instructions[2].trim()
        log[key] = number;
        }
    }    
    else if (instructions[1]=='AND'){
        let number1 = get_value(instructions[0], log)
        let number2 = get_value(instructions[2], log)
        if(!isNaN(number1) & !isNaN(number2)){
        let key = instructions[4].trim()
        log[key] = number1&number2 >>> 0;
        }
    }
    else if (instructions[1]=='OR'){
        let number1 = get_value(instructions[0], log)
        let number2 = get_value(instructions[2], log)
        if(!isNaN(number1) & !isNaN(number2)){
        let key = instructions[4].trim()
        log[key] = number1|number2 >>> 0;
        }
    }
    else if(instructions[1] =='LSHIFT'){
        let number1 = get_value(instructions[0], log)
        let number2 = get_value(instructions[2], log)
        if(!isNaN(number1) & !isNaN(number2)){
        let key = instructions[4].trim()
        log[key] = number1<<number2 >>> 0;
        }
        
    }
    else if(instructions[1] =='RSHIFT'){
        let number1 = get_value(instructions[0], log)
        let number2 = get_value(instructions[2], log)
        if(!isNaN(number1) & !isNaN(number2)){
        let key = instructions[4].trim()
        log[key] = number1>>number2 >>> 0;
        }
        
    }
    else if (instructions[0]=='NOT'){
        let number = get_value(instructions[1], log)
        if(!isNaN(number)){
        let key = instructions[3].trim()
        log[key] = ~number >>> 0 & 0xFFFF;
        }        
    }
}

log = {}
while (! ('a' in log)){
for (const s of strings){
    interpretInstruction(s, log)
}
}

console.log(log)