import { getInputDirection } from "./input.js"

export const snakeSpeed = 1  // speed at which the snake travels according to the main function
const snakeBody = [{ x: 11, y: 11}]  // starting point for the snake head
let newSegments = 0 // default snake is not growing

export const update = () => {
    addSegements()

    const inputDirection = getInputDirection()  // link to the input file for addlistener
    for (let i = snakeBody.length - 2; i >= 0; i--) { // selects the middle element
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x // move the snake along the x axis
    snakeBody[0].y += inputDirection.y // move the snake along the y axis
}

export const draw = (gameBoard) => {    // function for drawing the snake in
    snakeBody.forEach(snakePart => {
        const snakeElement = document.createElement('div') //this creates a single div for the snake element
        snakeElement.style.gridRowStart = snakePart.y   //assign the snakelement to the x axis
        snakeElement.style.gridColumnStart = snakePart.x  //assign the snakelement to the y axis
        snakeElement.classList.add('snake')  // add in the styles using classlist
        gameBoard.appendChild(snakeElement)  // appends the snake to the gameboard

    })
}

export const snakeGrow = (amount) => {
    newSegments += amount
}

export const snakeContact = (position) => {
    return snakeBody.some(segment => {  //.some if any part of the body
        return equalPositions(segment, position)
    })
}

const equalPositions = (pos1, pos2) => { // if the snake and food are on the same square
    return pos1.x === pos2.x && pos1.y ===pos2.y 
}

const addSegements = () => { // take the end element and duplicate it onto the end
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length -1]})
    }

    newSegments = 0
}



