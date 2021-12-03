// Create the canvas
let screenColor = document.getElementById('gameScreen');
var ctx = screenColor.getContext("2d");
ctx.strokeStyle = "black";
ctx.strokeRect(0, 0, screenColor.width, screenColor.height);

// User interaction with snake setup
document.addEventListener('keydown', function(event) {
    
    // Left key
    if(event.keyCode == 37) {
        dx = -10;
        dy = 0;
    }
    // Right key
    if(event.keyCode == 39){
        dx = 10;
        dy = 0;
    }  
    // Up key
    if(event.keyCode == 38){
        dx = 0;
        dy = -10;
    }
    // Down key
    if(event.keyCode == 40){
        dx = 0;
        dy = 10;

    }});


// Refresh the canvas
function clearCanvas(){
    ctx.clearRect(0,0,500,500)
    ctx.strokeRect(0, 0, screenColor.width, screenColor.height);
}

// Draw the snake
function drawSnakeyPart(snakeyPart) {
    ctx.fillStyle = 'lightblue';
    ctx.strokestyle = 'darkblue';  
    
    ctx.fillRect(snakeyPart.x, snakeyPart.y, 10, 10);
    ctx.strokeRect(snakeyPart.x, snakeyPart.y, 10, 10);
};

// Move the snake forward 
function advanceSnakey(){
    let newPos = {x:snakey[0].x + dx, y:snakey[0].y + dy};
    snakey.unshift(newPos);
    snakey.pop();
}

// Will draw food to chase
function drawFood(){
    ctx.fillStyle = 'lightblue';
    ctx.strokestyle = 'darkblue';  

    ctx.fillRect(300,300, 10, 10);
    ctx.strokeRect(300,300, 10, 10);
}

// Runs the snake game
function main(){
    clearCanvas();
    snakey.forEach(drawSnakeyPart);
    advanceSnakey();
};

// Create the snake
let snakey = [
    {x:210, y:250},
    {x:220, y:250},
    {x:230, y:250},
    {x:240, y:250},
    {x:250, y:250}
];

// Set direction: left
let dx = -10; 
let dy = 0;

// Call main every 1 second
setInterval(main, 60);

