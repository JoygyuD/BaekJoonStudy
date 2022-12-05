function solution(input){
    const [a,b] = input;
    let H = a;
    let M = b;
    if(M >= 45){
        M = M - 45;
    }else{
        if(H === 0){
            H = 23;
            M = 60-(45 - M);
        }else{
            H = H - 1;
            M = 60-(45 - M);
        }
    }
    console.log(H+" "+M);
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