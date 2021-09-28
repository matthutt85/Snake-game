
import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection, } from "./js/snake.js";
import { update as updateFood, draw as drawFood, } from './js/food.js';
import { outsideGrid } from './js/grid.js';

let lastRenderTime = 0 
let gameOver = false
const gameBoard = document.querySelector('.container__game-board');

 const main = (currentTime) => {
    if (gameOver) {
      if (confirm('You Lose! press ok to restart')) {
          window.location = '/'
      }
      return 
    }

     window.requestAnimationFrame(main)  //request a frameanimation for everytime the browser refreshes and setting it to currentTime
     const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 
     console.log (secondsSinceLastRender) // a variable to set the time since last render equal to currenttime - lastrender time which equals 0 divided
     if (secondsSinceLastRender < 1 / snakeSpeed) return
     lastRenderTime = currentTime
     

     updateGame()
     draw ()
 }

 window.requestAnimationFrame(main)


const updateGame = () => {
    updateSnake()
    updateFood()
    checkDeath()
   
}

const draw = () => {
    gameBoard.innerHTML = ('') // removes rest of the body
    drawSnake(gameBoard)  //passing gameBoard in
    drawFood(gameBoard)
}

const checkDeath = () => {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}


