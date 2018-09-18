function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    const dimension = arr.length;
    let sumHourglass = [];
    let n = 0;
    for(let rowIndex=0;rowIndex+2<dimension;rowIndex++){
        for(let colIndex=0;colIndex+2<dimension;colIndex++){
             let sumTop= arr[rowIndex][colIndex]+ arr[rowIndex][colIndex+1]+arr[rowIndex][colIndex+2];
            let sumMid = arr[rowIndex+1][colIndex+1];
            let sumBottom = arr[rowIndex+2][colIndex]+ arr[rowIndex+2][colIndex+1]+arr[rowIndex+2][colIndex+2];
            sumHourglass[n]= sumTop+sumMid+sumBottom;
            n++;
        }
    }
    sumHourglass.sort((a,b)=>b-a);
    console.log(sumHourglass[0]);
}
