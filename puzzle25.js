

function index(row, col){
    let delta = row-1
    let new_col = col+delta
    let triangular_num = new_col*(new_col+1)/2
    return triangular_num - delta
}

console.log(index(1,1))
console.log(index(3,4))
console.log(index(1,6))
console.log(index(6,1))
console.log(index(2981, 3075))

let my_index = index(2981, 3075)


function next_code(last_code){
    return (last_code*252533)%33554393
}

function code(index){
    if(index ==1) return 20151125
    let s= code(index-1)
    return next_code(s)
}

console.log(code(index(1,1)))
console.log(code(index(3,4)))
console.log(code(index(5, 1)))
console.log(code(index(1,6)))
console.log(code(index(6,1)))
console.log(code(index(6,6)))

let i =1
let c = code(i)
while(i<my_index){
    i++;
    c = next_code(c)
}

console.log(c)


