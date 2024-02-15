var timer =3;
var score=0;
var rn=0;

function increasescore(){
    score+=10;
    document.querySelector("#scrval").textContent=score
}

function getnewhit(){

     rn =Math.floor(Math.random()*10)

    document.querySelector("#hitval").textContent=rn
}

function settimer(){
     var intrvaltime=  setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timrval").textContent=timer
        }
        else{
            clearInterval(intrvaltime)
            document.querySelector(".pnlbtm").innerHTML=`   <div><h1>Game over!!</h1><h2>Your scored ${score}</h2> </div>`

        }
      
    }, 1000);
   

}


function makeBubble(){
 var clutter=""

for(var i=1;i<=102;i++)
{
var rn=Math.floor(Math.random()*10)
clutter+=` <div class="bubble">${rn}</div>`;
}

document.querySelector('.pnlbtm').innerHTML=clutter
}

document.querySelector(".pnlbtm").addEventListener("click",function(val){
   var numbern=Number(val.target.textContent)
   if(numbern===rn)
   {
    increasescore();
    makeBubble();
    getnewhit();
   }

})

makeBubble();
settimer();
getnewhit();
