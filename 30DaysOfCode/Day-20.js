process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
    let totalSwap = 0;
    for(let i=0;i<a.length;i++){
        
        for(let j=0;j<a.length;j++){
            if(a[j]>a[j+1]){
                let tmp = a[j+1];
                a[j+1] = a[j];
                a[j] = tmp;
                
                totalSwap++;
            }
        }
    }
    console.log(`Array is sorted in ${totalSwap} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[a.length-1]}`);
}