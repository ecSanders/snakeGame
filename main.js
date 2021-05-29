// Create the canvas
let screenColor = document.getElementById('gameScreen');
var ctx = screenColor.getContext("2d");
ctx.strokeStyle = "black";
ctx.strokeRect(0, 0, screenColor.width, screenColor.height);

// Create the snake
let snakey = [
    {x:210, y:250},
    {x:220, y:250},
    {x:230, y:250},
    {x:240, y:250},
    {x:250, y:250}
];

let dx = -10;
let dy = 0;

function drawSnakeyPart(snakeyPart) {
    ctx.fillStyle = 'lightblue';
    ctx.strokestyle = 'darkblue';  

    ctx.fillRect(snakeyPart.x, snakeyPart.y, 10, 10);
    ctx.strokeRect(snakeyPart.x, snakeyPart.y, 10, 10);
};

function advanceSnakey(){
    let newPos = {x:snakey[0].x + dx, y:snakey[0].y + dy};
    snakey.unshift(newPos);
    snakey.pop();
}

function clearCanvas(){
    ctx.clearRect(0,0,500,500)
    ctx.strokeRect(0, 0, screenColor.width, screenColor.height);
}

function checkInput(){

}
function main(){
    console.log('hello');
    clearCanvas();
    snakey.forEach(drawSnakeyPart);
    //checkInput()
    advanceSnakey();

};

function drawFood(){
    ctx.fillStyle = 'lightblue';
    ctx.strokestyle = 'darkblue';  

    ctx.fillRect(300,300, 10, 10);
    ctx.strokeRect(300,300, 10, 10);
}



setInterval(main, 60);



console.log(snakey)







