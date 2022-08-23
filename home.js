
let submit = document.getElementById('button');

submit.onclick = function(){
    let sideA = (document.getElementById('SideA').value);
        sideA=Number(sideA);
    let sideB = Number(document.getElementById('SideB').value);
    sideB=Number(sideB);
 
    let addx = Math.pow(sideA, 2) + Math.pow(sideB, 2);
    console.log(addx);

    let result = Math.sqrt(addx)
    console.log(result);
    
 result = document.getElementById('display').innerHTML = result;
    
}
