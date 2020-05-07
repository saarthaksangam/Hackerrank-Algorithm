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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let count_app = 0
    let count_org = 0
    for(let i = 0; i<apples.length; i++)
    {
        let dist_app = a + apples[i]
        if(dist_app>=s && dist_app<=t) count_app++
         
    }
    for(let i = 0; i<oranges.length; i++)
    {
        let dist_org = b + oranges[i]
        if(dist_org>=s && dist_org<=t) count_org++
         
    }
    console.log(count_app)
    console.log(count_org)
}

function main() {
    const st = readLine().split(' ');
    const s = parseInt(st[0], 10);
    const t = parseInt(st[1], 10);
    const ab = readLine().split(' ');
    const a = parseInt(ab[0], 10);
    const b = parseInt(ab[1], 10);
    const mn = readLine().split(' ');
    const m = parseInt(mn[0], 10);
    const n = parseInt(mn[1], 10);
    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));
    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));
    countApplesAndOranges(s, t, a, b, apples, oranges);
}
