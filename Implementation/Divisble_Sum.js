'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    let count = 0
    for(let i in ar) {
        for(let j in ar) {
            if(i<j && (ar[i]+ar[j])%k===0) 
                    count++
            }
        }
    
    console.log(count)
}

function main() {
    const nk = readLine().split(' ');
    const n = parseInt(nk[0], 10);
    const k = parseInt(nk[1], 10);
    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));
    let result = divisibleSumPairs(n, k, ar);
}
