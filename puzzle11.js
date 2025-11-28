
function increment(string){
    let c = string.charAt(string.length - 1)
    if(c =='z'){
        return increment(string.slice(0, -1)) + 'a'

    }
    else{
        return string.slice(0, -1) + String.fromCharCode(c.charCodeAt(0) + 1)
    }
}

console.log(increment('aa'))
console.log(increment('xx'))
console.log(increment('xy'))
console.log(increment('xz'))


function valid(string){

    let constraint1 = false
    for (let i = 1; i < string.length - 1; i++) {
        let a = string.charAt(i - 1).charCodeAt(0)
        let b = string.charAt(i    ).charCodeAt(0)
        let c = string.charAt(i + 1).charCodeAt(0)
        if (b== a+1 &&c==b+1) constraint1 = true
    } 
    let constraint2 = true
    for (const c of string){
        if(c=='i' || c=='o' ||c=='l'){  constraint2 = false}
    }

    let constraint3 = false
    let count = 0
    for (let i = 0; i < string.length - 1; i++) {
        if(string.charAt(i) == string.charAt(i+1)){
            count ++
            i++
        }
    } 
    constraint3 = count >=2

    return constraint1 && constraint2 && constraint3


}



let input = 'hxbxwxba'
while (!valid(input)){
    input = increment(input)
}
console.log (input)
input= increment(input)

while (!valid(input)){
    input = increment(input)
}
console.log (input)