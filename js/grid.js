const gridSize = 21

export let randomGridPosition = () => {
    return {
      x: Math.floor(Math.random() * gridSize) + 1,
      y: Math.floor(Math.random() * gridSize) + 1, 
    }
}