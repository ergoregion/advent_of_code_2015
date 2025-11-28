// Import the 'fs' module
const fs = require('fs');
const assert =  require('assert');

// Read the file synchronously
const data = fs.readFileSync('puzzle9-data.txt', 'utf8');

const strings=data.split('\n');

console.log(strings)


function AddEdge(string, nodes, edges){
    const instructions = string.split(' ');
    let node1 = instructions[0]
    let node2 = instructions[2]
    if (!nodes.includes(node1)){nodes.push(node1); edges[node1] = {}}
    if (!nodes.includes(node2)){nodes.push(node2); edges[node2] = {}}
    edges[node1][node2] = parseInt(instructions[4], 10)
    edges[node2][node1] = parseInt(instructions[4], 10)
}


let nodes = []
let edges = {}

for (const s of strings){
    AddEdge(s, nodes, edges)

}
console.log(nodes)
console.log(edges)

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(inputArr)

 return result;
}

function distance(route, edges){
    let result = 0
    let i=0
    while(i+1<route.length){
        result += edges[route[i]][route[i+1]]
        i++
    }
    return result

}
let best_score = Infinity
let worst_score = 0
for (const route of permutator(nodes)){
console.log(route)
let d = distance(route, edges)
console.log(d)
if (d<best_score){best_score = d}
if (d>worst_score){worst_score = d}
}

console.log(best_score)
console.log(worst_score)




function process_node(node, current_distance,edges, node_distances,processed_nodes){
    for (const [destination, distance] of Object.entries(edges[node])) {
        if (processed_nodes.includes(destination)){}
        else if (destination in node_distances){
            if(current_distance + distance< node_distances[destination]){
                node_distances[destination] = current_distance + distance
            }
        }
        else{
            node_distances[destination] = current_distance + distance
        }
    }
}
function next_node(node_distances,processed_nodes){
    var items = Object.keys(node_distances).map(function(key) {
        return [key, node_distances[key]];
    });

    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    for (const item of items) {
        if(!processed_nodes.includes(item[0])){
            return item[0]
        }
    }
    return NaN
}

function dykstra_shortest_distances(start, nodes, edges){
    let node_distances = {}
    node_distances[start] = 0
    let processed_nodes = [start,]
    process_node(start, 0,edges, node_distances,processed_nodes)
    while(true){
        let next = next_node(node_distances, processed_nodes)
        if(isNaN(next)) {
            return node_distances
        }
        process_node(next, node_distances[next], edges, node_distances, processed_nodes)
        processed_nodes.push(next)
    }
}

node_distances=dykstra_shortest_distances("London", nodes, edges)
console.log(node_distances)