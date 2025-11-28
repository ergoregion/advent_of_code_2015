const fs = require('fs');
const assert =  require('assert');
const { log } = require('console');

// Read the file synchronously
const data = fs.readFileSync('puzzle13-data.txt', 'utf8');
const strings=data.split('\n');


function interpretLine(string){
    const instructions = string.split(' ');
    let subject = instructions[0]
    let object = instructions[10].trim().slice(0,-1)
    let value = parseInt(instructions[3], 10)
    let delta = value
    if (instructions[2] == 'lose'){
        delta = -delta
    }
    return [subject, object, delta]
}



let logics = []

for (const s of strings){
    logics.push(interpretLine(s))
}
console.log(logics)


function score_logics(logics, ordered_names){
    let result = 0
    for (const l of logics){
        for (let i=0;i<ordered_names.length-1;i++){
            if (l[0]==ordered_names[i] && l[1] == ordered_names[i+1]) {result += l[2]}
            if (l[1]==ordered_names[i] && l[0] == ordered_names[i+1]) {result += l[2]}
        }
        if (l[0]==ordered_names[ordered_names.length-1] && l[1] == ordered_names[0]) {result += l[2]}
        if (l[1]==ordered_names[ordered_names.length-1] && l[0] == ordered_names[0]) {result += l[2]}

    }
    return result
}

names = ["Alice", "Bob", "Carol",  "David", "Eric","Frank","George" , "Mallory" ]

result = score_logics(logics, names)

console.log(result)

function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}

result =0;
for (const p of permutator(names)){
    l = score_logics(logics, p)
    if(l>result) result =l
}
console.log(result)


names_inc_me = ["Alice", "Bob", "Carol",  "David", "Eric","Frank","George" , "Mallory", "ME" ]


result =0;
for (const p of permutator(names_inc_me)){
    l = score_logics(logics, p)
    if(l>result) result =l
}
console.log(result)