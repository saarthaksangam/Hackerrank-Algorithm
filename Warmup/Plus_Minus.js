'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    // arr.sort(function(a, b){return a - b});
    // console.log(arr)
    let neg = 0
    let zeroes = 0
    let pos = 0
    for (let i = 0; i<arr.length; i++) {
        if(arr[i]< 0) neg++
        if(arr[i]==0) zeroes++
        if(arr[i]>0) pos++
    }
    console.log((pos/arr.length).toFixed(6))
    console.log((neg/arr.length).toFixed(6))
    console.log((zeroes/arr.length).toFixed(6))
}

function main() {
    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    plusMinus(arr);
}
