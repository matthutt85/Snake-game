import { snakeContact, snakeGrow } from "./snake.js"

let food = { x: 10, y: 1 }
const snakeSize = 1

export let update = () => {
   if (snakeContact (food)) {
      snakeGrow(snakeSize) 
      food = { x: 20, y: 10}
   }
}


export let draw = (gameBoard) => {
    
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)

}

