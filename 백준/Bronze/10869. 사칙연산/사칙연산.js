function solution(input){
    const [a,b] = input;
    const answer1 = a+b;
    const answer2 = a-b;
    const answer3 = a*b;
    const answer4 = parseInt(a/b);
    const answer5 = a%b;
    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);
    console.log(answer5);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input;
let list = [];
rl.on('line', function(line) {
    input = line;
    rl.close();
}).on("close", function() {
    // list = input.split(' ').map((el) => el);
    list = input.split(' ').map((el) => parseInt(el));
    solution(list);
    process.exit();
});