
function do_i_win(my_damage, my_armour, my_health, their_damage, their_armour, their_health){
    let my_true_damage = Math.max(1, my_damage-their_armour) 
    let their_true_damage = Math.max(1, their_damage-my_armour) 
    let current_health = my_health
    let their_current_health= their_health
    while(true){
        their_current_health -=my_true_damage
        if(their_current_health<=0)return true
        current_health -= their_true_damage
        if(current_health<=0)return false
    }

}

console.log( do_i_win(5,5,8, 7,2,12))


console.log( do_i_win(4,0,100,8,2,100))

weapons = [
["Dagger    ",    8,     4],
["Shortsword",   10,     5],
["Warhammer ",   25,     6],
["Longsword ",   40,     7],
["Greataxe  ",   74,     8]
]
armour = [
["none   ",   0,    0],
["Leather   ",   13,    1],
["Chainmail ",   31,    2],
["Splintmail",   53,    3],
["Bandedmail",   75,    4],
["Platemail ",  102,    5]
]
rings = [
["none   ",   0,    0,0],
["none   ",   0,    0,0],
["Damage +1  ",  25 ,    1 ,      0],
["Damage +2  ",  50 ,    2 ,      0],
["Damage +3  ", 100 ,    3 ,      0],
["Defense +1 ",  20 ,    0 ,      1],
["Defense +2 ",  40 ,    0 ,      2],
["Defense +3 ",  80 ,    0 ,      3]
]

cheapest = 1000000
expensive = 0

for (const r1 of rings){
    for (const r2 of rings){
        if(r1!=r2){
            for (const w of weapons){
            for (const a of armour){
                cost =  a[1]+w[1]+r1[1]+r2[1]
                let my_damage = w[2]+r1[2]+r2[2]
                let my_armour = a[2]+r1[3]+r2[3]
                if(do_i_win(my_damage,my_armour,100,8,2,100)){
                if(cost<cheapest){
                    console.log(`Cheap: cost: ${cost}  w:${w}  a:${a} r1:${r1}  r2:${r2},  d:${my_damage},  a:${my_armour}`)
                    cheapest= cost
                }
                }
                else{
                    if(cost>expensive){
                    console.log(`Expensive: cost: ${cost}  w:${w}  a:${a} r1:${r1}  r2:${r2},  d:${my_damage},  a:${my_armour}`)
                    expensive= cost
                }
                }
                }            
            }
        }
    }
}
console.log(cheapest)
console.log(expensive)