
display_1 =0;
display_2 =0;


let play = document.getElementById('submit');
play.onclick = function (){
    display_1 = Math.floor(Math.random()*6+1);
    console.log(display_1);
    document.getElementById("dice_1").innerHTML= display_1 ;
   
    display_2 = Math.floor(Math.random()*6+1);
    console.log(display_2);
    document.getElementById("dice_2").innerHTML= display_2 ; 
    
    if(true){
        document.getElementById("address").innerHTML ='Next turn';
    }
    else{
        document.getElementById("address").innerHTML ='You win';
    }
   
   
   
}