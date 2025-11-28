// Import the 'fs' module
const fs = require('fs');
const assert =  require('assert');

// Read the file synchronously
const data = fs.readFileSync('puzzle6-data.txt', 'utf8');

const strings=data.split('\n');

let matrix = new Array(1000).fill(0).map(() => new Array(1000).fill(0));



function locations(string){
    const instructions = string.split(' ');
    if (instructions[0] == 'toggle'){
        const start = instructions[1];
        const end = instructions[3];
        x_start = parseInt(start.split(',')[0])
        y_start = parseInt(start.split(',')[1])
        x_end = parseInt(end.split(',')[0])
        y_end = parseInt(end.split(',')[1])
        return [x_start,y_start,x_end,y_end];
    }    
    else if (instructions[1]=='off'){
        const start = instructions[2];
        const end = instructions[4];
        x_start = parseInt(start.split(',')[0])
        y_start = parseInt(start.split(',')[1])
        x_end = parseInt(end.split(',')[0])
        y_end = parseInt(end.split(',')[1])
        return [x_start,y_start,x_end,y_end];
    }
    else if(instructions[1] =='on'){
        const start = instructions[2];
        const end = instructions[4];
        x_start = parseInt(start.split(',')[0])
        y_start = parseInt(start.split(',')[1])
        x_end = parseInt(end.split(',')[0])
        y_end = parseInt(end.split(',')[1])
        return [x_start,y_start,x_end,y_end];
    }
}

function interpretInstruction(string, matrix){
    
    const l = locations(string)
    const instructions = string.split(' ');

    for (let x= l[0];x<=l[2];x++){
        
    for (let y= l[1];y<=l[3];y++){
        
    if (instructions[0] == 'toggle'){
        matrix[x][y] +=2
    }    
    else if (instructions[1]=='off'){
        matrix[x][y] = Math.max(matrix[x][y]-1,0)
    }
    else if(instructions[1] =='on'){
        matrix[x][y] +=1
    }
    }

    }





}
for (const s of strings){
interpretInstruction(s, matrix)
}


total = 0;
for (const a of matrix){
    for(const b of a){
        total +=b
    }
}
console.log(total)