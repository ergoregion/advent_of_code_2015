// Import the 'fs' module
const fs = require('fs');
// Read the file synchronously
const data = fs.readFileSync('puzzle2-data.txt', 'utf8');
console.log(data.length)
// Split on new line
const data_lines = data.split('\n')
console.log(data_lines.length)
total =0;
ribbon_total = 0;
for (const line of data_lines){
    const numbers = line.split('x')
    l= parseInt(numbers[0])
    w= parseInt(numbers[1])
    h= parseInt(numbers[2])
    side1_a = l*w;
    side2_a = w*h;
    side3_a = h*l;
    side1_p = 2*l + 2*w;
    side2_p = 2*w + 2*h;
    side3_p = 2*h + 2*l;
    total += side1_a*2+side2_a*2+side3_a*2 + Math.min(side1_a,side2_a,side3_a);
    ribbon_total += Math.min(side1_p,side2_p,side3_p) + l*w*h;
}
console.log(total)
console.log(ribbon_total)

