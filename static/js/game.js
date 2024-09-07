let confirmedKey
let isPlayerTwoTurn = false
document.addEventListener("keydown",function(e)
{
    let moveArray = ["ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]
    if(moveArray.includes(e.key))
    {
        confirmedKey = e.key
    }

    if(e.key == " ")
    {
        modifyPlayer(confirmedKey)
    }
})

function start()
{
    isPlayerTwoTurn = false
    movePhase()
}

function modifyPlayer(key)
{
    let newMagnitude = 0
    let newDir = 0

    switch(key)
    {
        case "ArrowUp":
            newMagnitude = 1
        break;

        case "ArrowLeft":
            newDir = -1
        break;

        case "ArrowRight":
            newDir = 1;
        break;

        case "ArrowDown":
            newMagnitude = -1
        break;
    }

    if(isPlayerTwoTurn && !(playerTwo.direction + newDir < -1 || playerTwo.direction + newDir > 1) && playerTwo.magnitude + newMagnitude > 0)
    {
        playerTwo.magnitude += newMagnitude
        playerTwo.direction += newDir
        return
    }

    console.log(!(playerTwo.direction + newDir < -1 || playerTwo.direction + newDir > 1))
    console.log( playerTwo.magnitude + newMagnitude > 0)
    if(!isPlayerTwoTurn && !(playerTwo.direction + newDir < -1 || playerTwo.direction + newDir > 1) && playerTwo.magnitude + newMagnitude > 0)
        {
            console.log("ims")
            playerOne.magnitude += newMagnitude
            playerOne.direction += newDir
            return
        }
    

}

function movePhase()
{
    
}