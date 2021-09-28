
let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener('keydown', e => {  // e listner for input arrow keys
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break // stops snake moving back on itself
           inputDirection = { x: 0, y: -1}  // y moves upwards
           break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
           inputDirection = { x: 0, y: +1}
           break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0}
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: +1, y: 0}
            break
    }
})

export const getInputDirection = () => {
    lastInputDirection = inputDirection
    return inputDirection
}