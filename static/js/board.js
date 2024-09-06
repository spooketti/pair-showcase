let board = document.getElementById("board")
let ctx = board.getContext("2d")
const rows = 20;
const cols = 20;
const boxDim = 20;
const canvasWidth = boxDim * cols;
const canvasHeight = boxDim * rows;
let matrix = new Array(cols).fill(0).map(() => new Array(rows).fill(0));

//start data
//ypos, xpos, rot

//rot 0 north, 1 east, 2 south, 3, west

let P1StartData = [0,0,0]
let P2StartData = [0,1,0]
let EndPos = [19,19] //ypos xpos

matrix[P1StartData[0]][P1StartData[1]] = 0.1
matrix[P2StartData[0]][P2StartData[1]] = 0.2
matrix[EndPos[0]][EndPos[1]] = 0.3
let playerOne = new player()
let playerTwo = new player()

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
    cTX.fillRect((1 * 24) + 1, (1 * 24) + 1, 22, 22)
}

function drawBoard()
{
    for(let y=0;y<cols;y++)
    {
        for(let x=0;x<rows;x++)
        {
            ctx.clearRect((x*boxDim)+1,(y*boxDim)+1,boxDim-2,boxDim-2)
        }
    }
}

initBoard()