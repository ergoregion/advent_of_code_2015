


function interpret(string){
    let count =0;
    let last_char =string[0]
    let result =''
    for (const c of string){
        if(c == last_char){
            count++
        }
        else{
            result += count
            result+= last_char
            last_char = c
            count =1;
        }
    }
    result += count
    result+= last_char

    return result

}

let result = interpret('111221')
console.log(result)

let counter = 1;
input = '1113122113'
while (counter <= 40) {
  input = interpret(input)
  console.log( ''+counter +':' + input.length)
  counter++;
}

counter = 1;
input = '1113122113'
while (counter <= 50) {
  input = interpret(input)
  console.log( ''+counter +':' + input.length)
  counter++;
}