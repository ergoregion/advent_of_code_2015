
const fs = require('fs');
const assert =  require('assert');
const { log } = require('console');

// Read the file synchronously
const data = fs.readFileSync('puzzle18-data.txt', 'utf8');
const strings=data.split('\n');

const n =100

var x = new Array(n);

for (var i = 0; i < n; i++) {
  x[i] = new Array(n);
}

for (let i=0;i<n;i++){
    for (let j=0;j<n;j++){
        x[i][j] = strings[i][j] == '#'
    }
}
x[0][0] = true
x[0][n-1] = true
x[n-1][0] = true
x[n-1][n-1] = true
console.log(x);
function count(){
    c = 0

    for (let i=0;i<n;i++){
        for (let j=0;j<n;j++){
            if(x[i][j]) c++
        }
    }
    return c
}
console.log(count());

function surrounds(x, i_pos, j_pos){
    c =0
    for (let i=Math.max(0,i_pos-1);i<Math.min(n, i_pos+2);i++){
        for (let j=Math.max(0,j_pos-1);j<Math.min(n, j_pos+2);j++){
            if(x[i][j]) c++
        }
    }
    if(x[i_pos][j_pos]) c=c-1
    return c
}

function new_state(state,count){
    if (state) return count ==2 || count ==3
    else return count ==3
}

function evolve(x){
    var counts = new Array(n);
    for (var i = 0; i < n; i++) {
        counts[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            counts[i][j] = surrounds(x,i,j);
        }
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            x[i][j] = new_state(x[i][j],counts[i][j]);
        }
    }
    x[0][0] = true
    x[0][n-1] = true
    x[n-1][0] = true
    x[n-1][n-1] = true
}

for (let index = 0; index <100; index += 1) {
  evolve(x)
}

console.log(x);
console.log(count());