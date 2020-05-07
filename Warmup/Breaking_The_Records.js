'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    var count_min = 0
    var count_max = 0
    let max = scores[0]
    let min = scores[0]
    for(let i = 0; i<scores.length; i++) {
        if(scores[i]>max) { 
        max = scores[i]
        count_max++
        continue
        }
        else if(scores[i]<min){ 
        min = scores[i] 
        count_min++
        continue
        }

    }
    
    return [count_max, count_min]


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine(), 10);
    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));
    const result = breakingRecords(scores);
    ws.write(result.join(' ') + '\n');
    ws.end();
}
