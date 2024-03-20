var p1_score=0;
var p2_score=0;
var p1_arr=[];
var p2_arr=[];
var count = 0;
var p1color = document.getElementById("player1").children;
var p2color = document.getElementById("player2").children;
function playgame(){
    if(count!=5){
    var p1s =  Math.ceil(Math.random()*100);
    var p2s =  Math.ceil(Math.random()*100);
    p1_arr.push(p1s);
    p2_arr.push(p2s);
    if(p1s%2==0){
        p1_score +=1
        document.getElementById("p1s").textContent = p1_score;
    }
    if(p2s%2==0){
        p2_score +=1
        document.getElementById("p2s").textContent= p2_score;
    } 
    updatescore();
    count++;
   
    

    }
    else{ 
        if(p1_score>p2_score){
            document.getElementById("res").textContent= "player 1 wins";
        }
        else if(p2_score>p1_score){
            document.getElementById("res").textContent= "player 2 wins";
        }
        else{
            document.getElementById("res").textContent = "Draw Match"
        }
        
    }  
    function updatescore(){
      
        for(let i=0;i<p1_arr.length;i++){
         if(p1_arr[i]%2==0)
         {
         p1color[i].style.background = "green";
         }
         else{
            p1color[i].style.background = "red";
         }
        
    }
 
    for(let i=0;i<p2_arr.length;i++){
     if(p2_arr[i]%2==0)
     {
        p2color[i].style.background = "green";
     }
     else{
        p2color[i].style.background = "red";
     }
    }
    }
}
