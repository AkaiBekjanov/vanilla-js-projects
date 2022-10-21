const cvs = document.getElementById('snake')
const ctx = cvs.getContext('2d')

//Create the unit
const box = 32

//load images

const ground = new Image()
ground.src = 'img/ground.png'

const foodImg = new Image()
foodImg.src = 'img/food.png'


//create the snake

let snake = []
snake[0]={
    x:8*box,
    y:10*box
}
// create the food
let food = {
    x:Math.floor(Math.random()*17+1)*box,
    y:Math.floor(Math.random()*15+3)*box
}


//create the score var
let score =0

//direction

let d;
document.addEventListener('keydown',direction)
function direction(e){
    if(e.keyCode == 37){
        d = 'LEFT'
    }
    else if(e.keyCode == 38){
        d = 'UP'
    }
    else if(e.keyCode == 39){
        d = 'RIGHT'
    }
    else if(e.keyCode == 40){
        d = 'DOWN'
    }
}


//draw everything to the cvs

function draw(){
    ctx.drawImage(ground,0,0)
   for(let i =0;i < snake.length;i++){
    ctx.fillStyle =(i==0) ? 'green' :'white'
    ctx.fillRect(snake[i].x,snake[i].y,box,box)

    ctx.strokeStyle = 'red'
    ctx.strokeRect(snake[i].x,snake[i].y,box,box)
   }
   ctx.drawImage(foodImg,food.x,food.y)

   //old head position
   let snakeX = snake[0].x
   let snakeY = snake[0].y

   snake.pop()

   if(d == 'LEFT')   snakeX-=box

   if(d == 'RIGHT') snakeX+=box

     if(d == 'UP')  snakeY-=box

    if(d == 'DOWN') snakeY+=box






//new head

let newHead = {
    x:snakeX,
    y:snakeY
}
snake.unshift(newHead)



//
   ctx.fillStyle = 'white'
   ctx.font = '45px Changa one'
   ctx.fillText(score,2*box,1.6*box)
}

//call draw function every 100 ms

let game = setInterval(draw,100)