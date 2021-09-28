import { snakeContact, snakeGrow } from "./snake.js"
import { randomGridPosition } from "./grid.js"

let food = getRandomFoodPosition()
const snakeSize = 1
export let update = () => {
    if (snakeContact (food)) {  // if the snake is on the same position wil return true
        snakeGrow(snakeSize) // if true snake will grow by 1
        food = getRandomFoodPosition()
    }
}


export let draw = (gameBoard) => {
    
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
    console.log(foodElement)
}

const getRandomFoodPosition = () => {
    let newFoodPosition
    while (newFoodPosition == null || snakeContact(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
