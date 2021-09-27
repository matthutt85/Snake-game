import { snakeContact, snakeGrow } from "./snake.js"
import { randomGridPosition } from "./grid.js"

let food = randomGridPosition ()
const snakeSize = 1

export let update = () => {
    if (snakeContact (food)) {
        snakeGrow(snakeSize) 
        food = getRandomFoodPosition()
    }
}


export let draw = (gameBoard) => {
    
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
    
}

const getRandomFoodPosition = () => {
    let newFoodPosition
    while (newFoodPosition == null || snakeContact(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
console.log(getRandomFoodPosition)