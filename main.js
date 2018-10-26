//DOMContentLoaded tells it to wait for the DOM to load to start manipulating things
document.addEventListener("DOMContentLoaded", function(){
  //find element
  let numTiles = 500
  let grid = document.querySelector(".canvas")

  for (let i = 0; i < numTiles; i++) {
    //create element - the tile
    let tile = document.createElement('div')
    tile.style.width = "4%"
    tile.style.paddingBottom = "4%"
    tile.style.border = "thin solid grey"
    tile.style.float = "left"
    tile.style.background = "white"
      //append tile to body
    grid.appendChild(tile)
  }

  // define variables that will be used in the following event listeners
  // so they will accessible to both without having to redefine them
let buttons = document.querySelector('.color-buttons')
let brushColor
let canvas = document.querySelector('.canvas')

buttons.addEventListener('click', function(event){
  brushColor = event.target.id
})

canvas.addEventListener('click', function(event) {
  event.target.style.background = brushColor
  })
})