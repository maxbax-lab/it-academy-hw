const width = 500;
const height = 300;
const ballWidth = 15;
const ballHeight = 15;
const ballX = width/2;
const ballY = height/2;
const radius = ballWidth/2;
const playerWidth = 10;
const playerHeight = 60;

let canvas = document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
let ctx = canvas.getContext('2d');

function clearAll() {
    ctx.clearRect(0,0,width,height);
}

function createRect(x,y,w,h,color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);
    ctx.strokeRect(x,y,w,h);
    ctx.closePath();
}

function createCircle(x,y,r,color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, r, 0, Math.PI*2, false);
    ctx.fill();
    ctx.closePath();
}
let field = {
    width: width,
    height: height,
    color: 'yellow',
    create: function() {
        createRect(0,0,this.width,this.height,this.color)
    }
}
let ball = {
    posX: ballX,
    posY: ballY,
    radius: radius,
    speedX: 0,
    speedY: 0,
    color: 'red',

    create: function() {
        createCircle(this.posX,this.posY,this.radius,this.color);
    },

    run: function() {
        this.posX = ballX
        this.posY = ballY;
        this.speedX = 2;
        this.speedY = 2;
    }
}
let player1 = {
    width: playerWidth,
    height: playerHeight,
    posX: 0,
    posY: height/2-playerHeight/2,
    speed: 0,
    color: 'blue',
    score: 0,

    create: function(){
        createRect(this.posX,this.posY,this.width,this.height,this.color)
    },

    updateScore: function() {
        let counter = document.getElementById('player1');
        counter.innerHTML = this.score;
    }
}
let player2= {
    width: playerWidth,
    height: playerHeight,
    posX: width-playerWidth,
    posY: height/2-playerHeight/2,
    speed: 0,
    color: 'green',
    score: 0,
    create: function(){
        createRect(this.posX,this.posY,this.width,this.height,this.color)
    },
    updateScore:  function() {
        let counter = document.getElementById('player2');
        counter.innerHTML = this.score;
    }
}
function move() {
  // Движение игроков
    player1.posY += player1.speed*2;
    player2.posY += player2.speed*2;
 
    document.onkeydown = function(e) {
        // W-вверх
        if(e.keyCode === 87) {
            player1.speed = -3;  
        }
        // S-вниз
        if(e.keyCode === 83) {
            player1.speed = 3;
        }
        // Up-вверх
        if(e.keyCode === 38) {
            player2.speed = -3;
        }
        // Down-вниз
        if(e.keyCode === 40) {
            player2.speed = 3;
        } 
    }
    document.onkeyup = function(e) {
        // W-вверх
        if(e.keyCode === 87) {
            player1.speed = 0;
        }
        // S-вниз
        if(e.keyCode === 83) {
            player1.speed = 0;
        }
        // Up-вверх
        if(e.keyCode === 38) {
            player2.speed = 0;
        }
        // Down-вниз
        if(e.keyCode === 40) {
            player2.speed = 0;
        } 
    }
    // Вышел ли игрок выше стены?
    if(player1.posY<=0) {
        player1.posY = 0;
    }
    if(player2.posY<=0) {
        player2.posY = 0;
    }
    // Вышел ли игрок ниже стены?
    if(player1.posY+player1.height>field.height ) {
        player1.posY=field.height-player1.height;
    }
    if(player2.posY+player2.height>field.height ) {
        player2.posY=field.height-player2.height;
    }
    // Движение шарика
    ball.posX+=ball.speedX;
    ball.posY+=ball.speedY;

    // вылетел ли мяч правее стены?
    if(ball.posX+ball.radius>field.width ) {
        ball.speedX=0;
        ball.speedY=0;
        ball.posX=field.width-ball.radius;
        player1.score++;
        player1.updateScore();
    }
    // вылетел ли мяч левее стены?
    if(ball.posX-ball.radius<0 ) {
        ball.speedX=0;
        ball.speedY=0;
        ball.posX=0+ball.radius;
        player2.score++;
        player2.updateScore();
    }
    // вылетел ли мяч ниже пола?
    if(ball.posY+ball.radius>field.height ) {
        ball.speedY = -ball.speedY;
        ball.posY = field.height-ball.radius;
    }

    // вылетел ли мяч выше пола?
    if(ball.posY-ball.radius<0) {
        ball.speedY = -ball.speedY;
        ball.posY = 0+ball.radius;
    }
    // ударился ли мяч во 2ого игрока?
    if(ball.posX+ball.radius >= player2.posX && ball.posX <= player2.posX + player2.width ) {
        if(ball.posY >= player2.posY && ball.posY <= player2.posY + player2.height ) {
            ball.speedX = -ball.speedX;
        }
    }
    // ударился ли мяч о 1ого игрока?
    if(ball.posX-ball.radius <= player1.posX+player1.width) {
        if( ball.posY+ball.radius >= player1.posY && ball.posY-ball.radius <= player1.posY + player1.height ) {
            ball.speedX = -ball.speedX;
        }
    } 

    field.create();
    ball.create();
    player1.create();
    player2.create();

    setTimeout(move, 20); 
}
move();

let btn = document.getElementById("start");
btn.addEventListener('click', start)
function start() {
    ball.run();
}
