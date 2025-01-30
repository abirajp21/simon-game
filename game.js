document.getElementById("green").addEventListener("click",function(){
    buttonClick(this.id);

    if(computer == 0 && gameStarted == 1)
        TrackOrder(this.id);
});

document.getElementById("red").addEventListener("click",function(){
    buttonClick(this.id);

    if(computer == 0 && gameStarted == 1)
        TrackOrder(this.id);
});

document.getElementById("blue").addEventListener("click",function(){
    buttonClick(this.id);

    if(computer == 0 && gameStarted == 1)
        TrackOrder(this.id);
});

document.getElementById("yellow").addEventListener("click",function(){
    buttonClick(this.id);

    if(computer == 0 && gameStarted == 1)
        TrackOrder(this.id);
    
});

var order = new Array();
var buttons = ['green', 'red', 'blue', 'yellow'];
var maxScore = 0;

function TrackOrder(id)
{
   

    if(order[idx] == id)
        idx++;
    else
    {
        gameEnd();
        return ;
    }
    
    if(idx == count)
    {
        idx = 0;
        document.getElementById('level-title').textContent = 'Score : ' + (count);
        document.getElementById('max-score').textContent = 'Max-Score : ' + maxScore;
        setTimeout(() => {
            start();  
            }, 700);
            
    }
}

function gameEnd()
{
    var heading = document.getElementById('level-title');
    heading.textContent = 'Game End';
    heading.classList.toggle('game-over');
    new Audio('sounds/wrong.mp3').play();
    
    setTimeout(function (){
        heading.classList.toggle('game-over');
        heading.textContent = 'Press A Key to Start';
    },1500);

    gameStarted = 0;
    console.log("Game End");
    console.log(count);
    idx = 0;
    count = 0;
    order.splice(0,order.length);
    maxScore--;
}

function buttonClick(buttonId)
{
    new Audio("sounds/"+ buttonId+".mp3").play();
    var button = document.getElementById(buttonId);
    button.classList.toggle("pressed");

    setTimeout(
        ()=>{
            button.classList.toggle("pressed")
        },
        150);
    
    console.log(buttonId);
}

var count = 0;
var computer = 1;
var idx = 0;
var gameStarted = 0;

function start(){
    computer = 1;
    count++;
    maxScore = count>maxScore?count:maxScore;

    let buttonNo = Math.floor(Math.random()*4);
    order.push(buttons[buttonNo]);
    document.getElementById(buttons[buttonNo]).click();
    computer = 0;
}



document.addEventListener("keydown",function(event){
    console.log(event);

    if(gameStarted == 0)
    {
        gameStarted = 1;
        setTimeout(start(),200);
        document.getElementById('level-title').textContent = 'Score : ' + (count-1);
        
    }
})