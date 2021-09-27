import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from "./js/snake.js";
import { update as updateFood, draw as drawFood } from "./js/food.js"
import { outsideGrid } from "./js/grid.js"

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.querySelector('.container__game-board');

console.log(gameBoard)
const main = (currentTime) => {

    if (gameOver) {
        if (confirm('You lost. press ok to restart.')) {
            window.location = '/'
        }
        return
    } 


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    
    
    lastRenderTime = currentTime
    console.log(currentTime)

    update()

    draw()
}

window.requestAnimationFrame(main)

let update = () => {
    updateSnake()
    updateFood()
    checkDeath()
}


let draw = () => {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

const checkDeath = () => {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}


// SNAKE GAME


// BODY
// need a background image to cover the whole page
// --- farm stle image, pixel image
// --- can make this using a grid template 
// --- add a div which more divs can be added to through a function?


// CHARACTER
// need to make a snake character of 2 boxes in length
// option for 2 player mode?? one uses w, a, s, d, other uses up, down, left. right.
// will need to make it so that if you bump into yourself the game is over
// if you bump into another player it is over


// FOOD 
// if you enter the same square as the food you grow in one square
// on contact a new food will appear randomly in the grid


// DEATH
// the game will stop and a game over sign will display itself in the middle


// SCORE
// a score counter will be placed for how many pieces of food eaten

// PLAYERS
// have and option for 1 player or 2 player

// TITLE
// retro font that will animate in at the beginning
// will also present a 1 player or 2 players clickable option. 
// will also present a controls instruction

// ADDITIONAL 
// level 2 - you cant go outside the screen 
// level 3 - the are blockades on the screen
// level 4 - you cannot go outside the screen and there are blockades