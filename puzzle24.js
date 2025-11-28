const fs = require('fs');
const assert =  require('assert');
const { log } = require('console');

// Read the file synchronously
const data = fs.readFileSync('puzzle24-data.txt', 'utf8');
const strings=data.split('\n');

let ints = strings.map(i => parseInt(i));
console.log(ints)
sum = ints.reduce((a, b) => a + b, 0)

console.log(sum/3)


function* combinations(array) {
    if(array.length>0){
    let d = combinations(array.slice(1))
    for (let c of d){
        yield c
        let n = c.slice()
        n.push(array[0])
        yield n
    } 
    }
    else {yield []}
}


best_count = ints.length
worst_enganglement = ints.reduce((a, b) => a * b, 1)
best_entanglement  = worst_enganglement


for (let group_a of combinations(ints)){
    let group_a_sum = group_a.reduce((a, b) => a + b, 0)
        let enganglement = group_a.reduce((a, b) => a * b, 1)
    if(group_a_sum != sum/3) continue

    if(group_a.length> best_count) continue
    if(group_a.length== best_count && enganglement>=best_entanglement) continue


    let remaining = ints.filter( function( el ) {return group_a.indexOf( el ) < 0;} );
    for (let group_b of combinations(remaining)){
        
        let group_b_sum = group_b.reduce((a, b) => a + b, 0)
        if(group_b_sum != sum/3) continue
        if(group_a.length== best_count && enganglement>=best_entanglement) continue
        let group_c = remaining.filter( function( el ) {return group_b.indexOf( el ) < 0;} );

        
        if(group_a.length <  best_count) {
            best_count = group_a.length
            best_entanglement=worst_enganglement
        }
        if(enganglement< best_entanglement){
            best_entanglement = enganglement
            console.log("" + group_a +"      " + group_b+"      " + group_c+"      "    + enganglement)
        }
    }

}

console.log(best_entanglement)



best_count = ints.length
best_entanglement  = worst_enganglement


for (let group_a of combinations(ints)){
    let group_a_sum = group_a.reduce((a, b) => a + b, 0)
    let enganglement = group_a.reduce((a, b) => a * b, 1)
    if(group_a_sum != sum/4) continue

    if(group_a.length> best_count) continue
    if(group_a.length== best_count && enganglement>=best_entanglement) continue



    let remaining = ints.filter( function( el ) {return group_a.indexOf( el ) < 0;} );
    for (let group_b of combinations(remaining)){
        
        let group_b_sum = group_b.reduce((a, b) => a + b, 0)
        if(group_b_sum != sum/4) continue
        if(group_a.length== best_count && enganglement>=best_entanglement) continue
        let still_remaining = remaining.filter( function( el ) {return group_b.indexOf( el ) < 0;} );
        for (let group_c of combinations(still_remaining)){
        
        let group_c_sum = group_c.reduce((a, b) => a + b, 0)
        if(group_c_sum != sum/4) continue
        if(group_a.length== best_count && enganglement>=best_entanglement) continue

        
        if(group_a.length <  best_count) {
            best_count = group_a.length
            best_entanglement=worst_enganglement
        }
        if(enganglement< best_entanglement){
            best_entanglement = enganglement
            console.log("" + group_a +"      " + group_b+"      " + group_c+"      "    + enganglement)
        }
    }
    }

}

console.log(best_entanglement)