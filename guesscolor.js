var chances=3;
var score=0;
 var btn1=document.getElementById('button-1');
var btn2=document.getElementById("button-2");
var btn3=document.getElementById("button-3");
var btn4=document.getElementById("button-4");
var btn5=document.getElementById("button-5");
 var btn6=document.getElementById("button-6");
let total=document.getElementById('demo1');
let chance=document.getElementById('demo');
var retr=document.getElementsByClassName('retry');
            btn1.addEventListener("click",()=>{
                score++;
                total.innerHTML=score;
            })
           
            btn2.addEventListener("click",()=>{
                chances--;
                chance.innerHTML=chances;
                myfunction();
            })
            btn3.addEventListener("click",()=>{
                chances--;
                chance.innerHTML=chances;
                myfunction();
            })
            btn4.addEventListener("click",()=>{
                chances--;
                chance.innerHTML=chances;
                myfunction();
            })
            btn5.addEventListener("click",()=>{
                chances--;
                chance.innerHTML=chances;
                myfunction();
            })
            btn6.addEventListener("click",()=>{
                chances--;
                chance.innerHTML=chances;
                myfunction();
            })
            function myfunction(){
            if(chances===0){
                alert("You lost the game,play again");
                score=0;
                chances=3;
                total.innerHTML=score;
                chance.innerHTML=chances;

            }
            }