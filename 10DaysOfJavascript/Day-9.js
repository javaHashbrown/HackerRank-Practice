const res = document.getElementById('res');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');
const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');
btn0.addEventListener('click',function(){
    if(res.innerText!=0 && !isOperator(res.innerText[res.innerText.length-1])){
        res.innerText += 0;
    }
    
});
btn1.addEventListener('click',()=>{
    if(res.innerText==0){
        res.innerText = 1;
    }else{
        res.innerText += 1;    
    }
    
});
btnClr.addEventListener('click',()=>{
    res.innerText=0;
});
btnSum.addEventListener('click',()=>{
    let text = res.innerText;
    let newText = addOperator(text,'+');
    res.innerText = newText;
});
btnSub.addEventListener('click',()=>{  
    let text = res.innerText;
    let newText = addOperator(text,'-');
    res.innerText = newText;
});
btnMul.addEventListener('click',()=>{
    let text = res.innerText;
    let newText = addOperator(text,'*');
    res.innerText = newText;
});
btnDiv.addEventListener('click',()=>{
    let text = res.innerText;
    let newText = addOperator(text,'/');
    res.innerText = newText;
});
btnEql.addEventListener('click',()=>{
    //todo
    let op = res.innerText.match(/([01]+)([\+\-\*\/])([01]+)/);
    let opLeft = parseInt(op[1],2);
    let opRight = parseInt(op[3],2);
    let operator = op[2];
    
    res.innerText = getResult(opLeft,opRight,operator).toString(2);
    
});

function isOperator(char){
    return ['+','-','*','/'].includes(char);
}
function addOperator(curText,newOp){
    let retText = curText;
    let lastChar = curText.charAt(curText.length-1);
    if(!isOperator(lastChar)){
        retText = curText+newOp;
    }else if(lastChar !== newOp){
        let newText = curText.substring(0,curText.length-1);
        retText = newText+newOp;
    }
    return retText;
}
function getResult(opLeft,opRight,operator){
    switch(operator){
        case '+':
            return opLeft+opRight;
        case '-':
            return opLeft-opRight;
        case '*':
            return opLeft*opRight;
        case '/':
            return opLeft/opRight;
    }
}