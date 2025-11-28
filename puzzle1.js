// Key
const floorup = '(';
const floordown = ')';

// Import the 'fs' module
const fs = require('fs');

// Read the file synchronously
const data = fs.readFileSync('puzzle1-data.txt', 'utf8');

// Log the file content to the console
console.log(data);

// Log the length of the data
console.log(`The length of the file content is: ${data.length}`);

// Count numbers of '(' and ')' in the data
const floors_ascended = data.replace(/\)/g, '').length;
const floors_descended = data.replace(/\(/g, '').length;
console.log(`Number of floors ascended: ${floors_ascended} \nNumber of floors descended: ${floors_descended}`);

// Total number of floors 
console.log(`Final floor arrived at: ${floors_ascended - floors_descended}`);

// Part 2 

function finalFloor(string) {
    const floors_ascended = string.replace(/\)/g, '').length;
    const floors_descended = string.replace(/\(/g, '').length;
    return floors_ascended - floors_descended;
}

console.log(finalFloor(data))

for (let i = 0; i < data.length; i++) {
    const ifinalFloor = finalFloor(data.slice(0,i));
    if (ifinalFloor == -1) {
        console.log(`Final floor: ${ifinalFloor}`);
        console.log(`Position of the character: ${i}`);
    }
    
}
