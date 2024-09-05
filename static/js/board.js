let board = document.getElementById("board")
let ctx = board.getContext("2d")
const rows = 20;
const cols = 20;
const boxDim = 20;
const canvasWidth = boxDim * cols;
const canvasHeight = boxDim * rows;
let matrix = new Array(cols).fill(0).map(() => new Array(rows).fill(0));


function initBoard() {
    ctx.strokeStyle = "rgb(0,0,0)"
    for (let y = 0; y < cols; y++) {
        ctx.beginPath()
        ctx.moveTo(0, boxDim * y)
        ctx.lineTo(canvasWidth, boxDim * y)
        ctx.stroke()
    }
    for (let x = 0; x < rows; x++) {
        ctx.beginPath()
        ctx.moveTo(boxDim * x, 0)
        ctx.lineTo(boxDim * x, canvasHeight)
        ctx.stroke()
    }
}

initBoard()