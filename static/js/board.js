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
// let playerList = [playerOne,playerTwo]
// let isPlayerTwoTurn = false
// let playerTurnDict = {
//     true: 0,
//     false: 1
// }

let colorDict = {
    0:"#ffffff",
    0.1:"#FF474C",
    0.2:"#47f4ff",
    0.3:"#73ff98"
}

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

function drawBoard()
{
    for(let y=0;y<rows;y++)
    {
        for(let x=0;x<cols;x++)
        {
            ctx.clearRect((x*boxDim)+1,(y*boxDim)+1,boxDim-2,boxDim-2)
            ctx.fillStyle = colorDict[matrix[y][x]]
            ctx.fillRect((x * boxDim) + 1, (y * boxDim) + 1, boxDim-2, boxDim-2)
            if(matrix[y][x] == 0.1 || matrix[y][x] == 0.2)
            {
                ctx.fillStyle = "black"
                ctx.font = boxDim+"px Arial"
                ctx.fillText("S",(x*boxDim)+(boxDim/8),(y*boxDim)+boxDim-2)
            }
        }
    }
}

initBoard()
drawBoard()