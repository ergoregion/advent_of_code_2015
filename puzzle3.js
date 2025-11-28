// Import the 'fs' module
const fs = require('fs');
const assert =  require('assert');

// Read the file synchronously
const data = fs.readFileSync('puzzle3-data.txt', 'utf8');

// Log the length of the data
console.log(`The number of steps santa takes: ${data.length}`);

// List all houses visted (inc. duplicates)
let allHouses = [];
//add origin location
allHouses.push(`0,0`);

let currentHouse = [0,0];

for (const char of data){
    let i = currentHouse[0]
    let j = currentHouse[1] 
    if (char == '>'){
        j = j+1;
    }
    else if (char == '<'){
        j = j-1;
    }
    else if (char == '^'){
       i = i+1;
    }
    else if (char == 'v'){
        i = i-1;
    }
    else{
        console.log(`ERROR`);
    }
    allHouses.push(`${i},${j}`);
    currentHouse = [i,j]
}

console.log(allHouses)

// Validation check 
assert(allHouses.length == data.length+1)

// Remove duplicates from allHouses
const uniqueListOfHouses = [...new Set(allHouses)];

console.log(uniqueListOfHouses.length)