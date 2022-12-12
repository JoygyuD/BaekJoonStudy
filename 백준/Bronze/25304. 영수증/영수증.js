const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let total = +input[0];
let cnt = +input[1];
let sum = 0;

for(let i=2; i<=cnt+1; ++i){
    let stuff = input[i].split(" ").map(item=>Number(item));
    sum += stuff[0] * stuff[1];
}

console.log(total === sum ? "Yes" : "No");