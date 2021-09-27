export const snakeSpeed = 2

const snakeBody = [{x: 11, y: 11}]


export let update = () => {
    console.log("update snake");
}


export let draw = (gameBoard) => {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridcolumnStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)

    })
}