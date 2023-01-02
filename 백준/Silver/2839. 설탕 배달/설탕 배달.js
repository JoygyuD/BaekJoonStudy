
let fs = require('fs')

let input = Number(fs.readFileSync('dev/stdin'))

let number = +input

function solution(number){
    let bag = 0;

    while(number > 0){
        if(number % 5 === 0){
            number -= 5;
        }else{
            number -= 3;
        }
        bag += 1;
    }
    return number === 0 ? bag : -1;
}

console.log(solution(number));

