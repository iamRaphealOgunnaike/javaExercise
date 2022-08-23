let count = 0;

let decreaseCount = document.getElementById('decrease');
let increaseCount = document.getElementById("increase");
let resetCount = document.getElementById("reset");


decreaseCount.onclick = function (){
    count-= 1,
    document.getElementById("clab").innerHTML= count;

}
increaseCount.onclick = function (){
    count += 1,
    document.getElementById("clab").innerHTML= count;

}
resetCount.onclick = function (){
    count = 0;
    document.getElementById("clab").innerHTML= 0;


}

















