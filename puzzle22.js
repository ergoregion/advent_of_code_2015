const boss_damage =8
let loss_per_turn = 0

class State{
  constructor(health, mana, boss_health) {
    this.health = health;
    this.mana = mana;
    this.boss_health = boss_health
    this.shields = 0
    this.poisons = 0
    this.recharges = 0
    this.cost_to_date=0
    this.chain = ''
  }    

  apply_effects_inc_armour() {
    let armour=0
    if(this.shields>0){this.shields--; armour+=7}
    if(this.poisons>0){this.poisons--; this.boss_health-=3}
    if(this.recharges>0){this.recharges--; this.mana+=101}
    
    return armour
  }

  take_boss_turn() {
    let armour=this.apply_effects_inc_armour()
    if(this.boss_health<=0) return
    else{
        let true_boss_damage = Math.max(1, boss_damage-armour) 
        this.health -= true_boss_damage
        }
    
  }
  take_player_turn(action) {
    this.health -= loss_per_turn
    if(this.health<=0) return false
    let armour=this.apply_effects_inc_armour()
    this.chain = this.chain+action
    if (action=='M') {this.mana -= 53; this.cost_to_date+=53; this.boss_health-=4}
    else if(action=='D') {this.mana -= 73;  this.cost_to_date+=73;this.boss_health-=2; this.health+=2}
    else if(action=='S' && this.shields==0) {this.mana -= 113; this.cost_to_date+=113; this.shields=6}
    else if(action=='P' && this.poisons==0) {this.mana -= 173; this.cost_to_date+=173; this.poisons=6}
    else if(action=='R' && this.recharges==0) {this.mana -= 229; this.cost_to_date+=229; this.recharges=5}
    else return false
    return true
  }
}


function game(actions, state){
    s = state
    for( c of actions){
        console.log(`
-- Player turn --
- Player has ${s.health} hit points, ${s.mana} mana
- Boss has ${s.boss_health} hit points
- Player casts ${c}.`)
        s.take_player_turn(c)
        if(s.boss_health<=0) return true
        if(s.health<=0) return false
        if(s.mana<=0) return false

        console.log(`
-- Boss turn --
- Player has ${s.health} hit points, ${s.mana} mana
- Boss has ${s.boss_health} hit points
- Boss attacks.`)
        s.take_boss_turn(c)
        if(s.boss_health<=0) return true
        if(s.health<=0) return false
        if(s.mana<=0) return false

    }

}

console.log(game("PM####", new State(10,250,13)))
console.log(game("RSDPM####", new State(10,250,14)))


state = new State(50, 500, 55)
let best_sucess = 1e8

function recurse(state, next_action){
        if(state.cost_to_date> best_sucess) return
        success = state.take_player_turn(next_action)
        if(!success) return
        if(state.boss_health<=0) { if(state.cost_to_date< best_sucess) {best_sucess= state.cost_to_date; console.log(best_sucess);console.log(state.chain)}return}
        if(state.health<=0) return
        if(state.mana<=0) return
        state.take_boss_turn(c)
        if(state.boss_health<=0) { if(state.cost_to_date< best_sucess) {best_sucess= state.cost_to_date; console.log(best_sucess), console.log(state.chain)}return}
        if(state.health<=0) return
        if(state.mana<=0) return
        for (const action of 'MDSPR'){
            let clone = Object.assign(Object.create(Object.getPrototypeOf(state)), state)
            recurse(clone, action)
        }

}

for (const action of 'MDSPR'){
            let clone = Object.assign(Object.create(Object.getPrototypeOf(state)), state)
            recurse(clone, action)
        }

console.log("Phase 1 best:  "+best_sucess)



best_sucess = 1e8
loss_per_turn = 1

for (const action of 'MDSPR'){
            let clone = Object.assign(Object.create(Object.getPrototypeOf(state)), state)
            recurse(clone, action)
        }

console.log("Phase 2 best:  "+best_sucess)