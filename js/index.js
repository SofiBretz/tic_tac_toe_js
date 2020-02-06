// const gameBoard () => {
//     const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X",]
// }();

// let reset = () => {


const Player = (name, symbol) => {
  const array = [];
  let win = false;
  const score = 0;
  const checkWinner = () => {
    const winingCompositions = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    console.log(win)
    // for (,let i = 0 , i<9, i++)
    for (const x in winingCompositions) {
      // console.log((winingCompositions[x])[0])
      if (array.includes((winingCompositions[x])[0]) && array.includes((winingCompositions[x])[1]) && array.includes((winingCompositions[x])[2])) {
        win = true;
        console.log(win);
        break;
      }
    }
  };


  return {
    name,
    array,
    symbol,
    win,
    score,
    checkWinner,
  };
};


const getMark = (event) => {
    currentPlayer.array.push(parseInt(event.target.id));
    document.getElementById(event.target.id).innerHTML=currentPlayer.symbol
  }
  

for (const x of document.getElementsByClassName('cell')) {
  x.addEventListener('click', getMark);
}

// document.getElementById('startGame').addEventListener('click', configGame)

let configGame = () => {
    let name1= document.getElementById("player1Name").value;
    let name2= document.getElementById("player2Name").value;
    let player1 = Player(name, 'X');
    let player2 = Player(name, 'O');
    let moves = 0;
    return {player1, player2, moves}
}

let currentPlayer=player1

let playerSwitch= () => {
    if (currentPlayer == player1) {
        currentPlayer = player2
    }
    else { 
        currentPlayer=player1
    }
    moves ++ 
}

let draw = false

let drawCheck = () => {
    if (moves == 9){ 
    draw == true
    }
}


let playGame= () => {

    configGame
    //ciclo 
    while (true){
    currentPlayer.getMark
    currentPlayer.checkWinner
    if (currentPlayer.win) {
        break;
    }
   playerSwitch
    drawCheck
    if (draw) {
        break
    }
    }
}
// const player1 = Player('test', 'x');
// const getMark = (event) => {
//   player1.array.push(parseInt(event.target.id));
//   document.getElementById(event.target.id).innerHTML="X"
//   player1.checkWinner();
//   console.log(player1.array);
// };




// let gameStart = () => {
//     player1
// }


// if (player1.win) {
//         //player 1 wins
//     } else {
//         if moves == 9
//         //draw
//     }
//     moves++
