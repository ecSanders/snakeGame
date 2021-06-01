// Create the canvas
let screenColor = document.getElementById('gameScreen');
var ctx = screenColor.getContext("2d");
ctx.strokeStyle = "black";
ctx.strokeRect(0, 0, screenColor.width, screenColor.height);

document.addEventListener('keydown', function(event) {

    // Left key
    if(event.keyCode == 37) {
        console.log('keypressed')
        console.log(dx,dy)
        switch (dx,dy) {
            case 10,0: // right
                dx = 0; // up
                dy = 10;
                break;
            case -10,0: //left
                dx = 0; // down
                dy = -10;
                break;
            case 0,10: // up
                dx = 10; // left
                dy = 0;
                break;
            case 0,-10: // down
                dx = 0; // right
                dy = -10;
                break;
            default:
                break;
        }
    }/*
    else if(event.keyCode == 39) {
        switch (dx,dy) {
            case 10,0: // right
                dx = 0; // up
                dy = -10;
                break;
            case -10,0: //left
                dx = 0; // down
                dy = 10;
                break;
            case 0,10: // up
                dx = 10; // left
                dy = 0;
                break;
            case 0,-10: // down
                dx = -10; // right
                dy = 0;
                break;
            default:
                break;
        }
    }*/
});

// Create the snake
let snakey = [
    {x:210, y:250},
    {x:220, y:250},
    {x:230, y:250},
    {x:240, y:250},
    {x:250, y:250}
];

let dx = -10; // Left
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




function main(){
    clearCanvas();
    snakey.forEach(drawSnakeyPart);
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

