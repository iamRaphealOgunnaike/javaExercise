// // let grade = u ;

// // switch(true){
// //     case grade>=50:
// //         console.log("you just pasted out")
// //         break;
// //     case grade >= 45:
// //             console.log("you just pasted out!")
// //         break;
// //     case grade>=30:
// //         console.log("you just pasted outter")
// //         break;

// //     default:
// //         console.log('nothing')


// // }


// let temp = -300;
// if(temp =0 || temp < 30){
//     console.log("the weather is good")
// }
// else{
//     console.log("bad weather")
// }

// let i="";

// while(i==  ""){
//     i = window.prompt("userName please enter");

// }
// console.log("Hello", i);
let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");
let button = document.getElementById("btn");
button.onclick = function(){
for (let i=1; i <= rows; i+=1){
    
    for (let j=1; j <= columns; j+=2){
    
        document.getElementById("display").innerHTML+=symbol;
        
    }
    document.getElementById("display").innerHTML+= "<br>";
}
}