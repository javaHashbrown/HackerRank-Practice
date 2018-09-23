'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the dynamicArray function below.
function dynamicArray(n, queries) {
    const seqList = [];
    for(let i=0;i<n;i++){
        seqList[i] = [];
    }
    let lastAnswer = 0;
    const result = [];
    for(let index=0;index<queries.length;index++){
        const [type,x,y] = queries[index];
        const seqIndex = (x^lastAnswer) % n;
        if(type===1){
            seqList[seqIndex].push(y);
        }
        if(type===2){
            const subSeqIndex = y % seqList[seqIndex].length
            lastAnswer = seqList[seqIndex][subSeqIndex];
            result.push(lastAnswer);
        }
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nq = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nq[0], 10);

    const q = parseInt(nq[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
