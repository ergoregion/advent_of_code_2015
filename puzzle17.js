values = [
33,
14,
18,
20,
45,
35,
16,
35,
1,
13,
18,
13,
50,
44,
48,
6,
24,
41,
30,
42,
]


const combinations = (inputArr) => {
  let result = [];

  const comb = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
        comb(arr.slice(1), m.concat([arr[0]]))
        comb(arr.slice(1), m)
   }
 }

 comb(inputArr)

 return result;
}



let count =0
let min_containter =values.length
for (const a of combinations(values)){
if ((a.reduce((a, b) => a + b,0)) == 150) {count ++
if(a.length<min_containter) min_containter= a.length
console.log(a)
}
}
console.log(count)
console.log(min_containter)


count =0
for (const a of combinations(values)){
if ((a.reduce((a, b) => a + b,0)) == 150 && a.length == min_containter) {count ++
console.log(a)
}
}
console.log(count)