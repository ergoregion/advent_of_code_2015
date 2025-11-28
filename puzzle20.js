function value(input){
    let result = 0
    if(input%Math.sqrt(input)==0) result += 10*Math.sqrt(input);
    for (let i=0;i<Math.sqrt(input);i++)
        if(input%i==0) {result += 10*i; result+= 10*input/i}

    return result
}

for (let i=0;i<10;i++) console.log(value(i))

let upper =9.0e5;
console.log(value(upper))
const target = 36000000
console.log(value(upper)>target)




for (let i=upper;i>0;i--) {
    let v = value(i)
    if(v>target) console.log("i: " + i + "     value: "+v) 
    }
//answer was
//831600

function value11(input){
    let result = 0

    for(let number_of_delivery = 1;number_of_delivery<=50;number_of_delivery++ ){

        if(input%number_of_delivery ==0) {
            elf_number = input/number_of_delivery
            result +=  elf_number*11
        }

    }

    return result
}

for (let i=0;i<10;i++) console.log(value11(i))

upper =1e6;
console.log(value11(upper))
console.log(value11(upper)>target)



for (let i=upper;i>0;i--) {
    let v = value11(i)
    if(v>target) console.log("i: " + i + "     value: "+v) 
    }

//answer was 884520