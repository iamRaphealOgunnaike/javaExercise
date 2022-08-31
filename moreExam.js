// // let temp = -1;
// // switch(true){
// //     case temp >=0 && temp <=30:
// //         console.log('the weather is good!')
// //         break;
// //     default:
// //         console.log('the weather is bad')
// // }

// // let Username ;
// // do {Username = window.prompt("Enter your name"); 

// // }while(Username == "" )
// //     Username = window.prompt("Enter your name");    

// // console.log("Hello", Username)

// // for (let counter=-1; counter <=100; counter+=1){
// //     console.log(counter)
// // }

// // btn={
// //     for(let counter=-1; counter <=100; counter+=1){
// //         let result = counter;
// //     document.getElementById("display").innerHTML=result;

// //     };
    
// // }

// let counter =0;
// let buttonx = document.getElementById("btn");

// // button.onclick = function(){for(let counter=1; counter <= 5; counter+=1){
// //     let result = counter;
// //    result = document.getElementById("display").innerHTML;

// //     }};

//     // button.onclick = (counter) =>{
//     //     for (let counter=-1; counter <=100; counter+=1){
//     //         console.log(counter)
//     //     };

//     // } 

//     // for (let counter=-1; counter <=100; counter+=1){
//     //         console.log(counter)              
        
        
//     //     };


// var bunny = document.getElementById("btn")

// bunny.onclick = function (){
//     counter+=1;
// }

let count = 0;

let start = document.getElementById('submit');

start.onclick=function(){
    count-= 1,
    document.getElementById("clab").innerHTML= count;
}
