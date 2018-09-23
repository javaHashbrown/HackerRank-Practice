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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    const array = Array(n+1);
    for(let i=0;i<n+1;i++){
        array[i] = 0;
    }
    queries.map(line=>{
        const [a,b,k] = line;
        array[a]+=k;
        if(b+1<=n) array[b+1] -= k;
        //console.log(array);
        });
    const res = array.reduce((acc,cur)=>{
        acc[0]= acc[0]===undefined?0:acc[0]+cur;
        acc[1] = acc[1]===undefined?0:(acc[0]>acc[1]?acc[0]:acc[1]);
        return acc;
    },[]);
    return res[1];

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
