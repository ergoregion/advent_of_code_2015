const fs = require('fs');
const assert =  require('assert');
const { type } = require('os');
const { isNumberObject } = require('util/types');

// Read the file synchronously
const data = fs.readFileSync('puzzle12-data.txt', 'utf8');

const obj = JSON.parse(data);
console.log(obj)

function count(json, include_red){
    let result = 0 
    if(typeof json === "number"){
        result += json
    }
    else if(Array.isArray(json)){
        for (item in json){
            result += count(json[item], include_red)
        }
    }
    else if(typeof json ==="object"){
        let local_count = 0
        let has_red = false
        for (item in json){
            if(json[item] == "red"){has_red = true}
            local_count += count(json[item], include_red)
        }
        if(!has_red ||include_red) result += local_count
    }
    return result
}

console.log(count(obj, true))
console.log(count(obj, false))