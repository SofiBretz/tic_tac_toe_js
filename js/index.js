// const gameBoard () => {
//     const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X",]
// }();

// let reset = () => {

const Player = (name, symbol) => {
  const array = [];
  const win = false;
  const score = 0;

  return {
    name,
    array,
    symbol,
    win,
    score,
  };
};

// document.getElementById('startGame').addEventListener('click', configGame)

const gameFlow = () => {
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
    // for (,let i = 0 , i<9, i++)
    for (const x in winingCompositions) {
      // console.log((winingCompositions[x])[0])
      if (
        currentPlayer.array.includes(winingCompositions[x][0])
        && currentPlayer.array.includes(winingCompositions[x][1])
        && currentPlayer.array.includes(winingCompositions[x][2])
      ) {
        currentPlayer.win = true;
      }
    }
  };

  let moves = 0;

  const getMark = (event) => {
    currentPlayer.array.push(parseInt(event.target.id));
    document.getElementById(event.target.id).innerHTML = currentPlayer.symbol;
    document.getElementById(event.target.id).removeEventListener('click', getMark);
    checkWinner();
    if (currentPlayer.win) {
      console.log(`${currentPlayer.name} wins`);
      // sleep(3000);
      document.location.reload();
      
    }


    playerSwitch();
    if (moves > 8) {
      console.log('DRAW GAME');
      reset();
    }
  };

  for (const x of document.getElementsByClassName('cell')) {
    x.addEventListener('click', getMark);
  }

  // let configGame = () => {
  const draw = false;
  const name1 = document.getElementById('player1Name').value;
  const name2 = document.getElementById('player2Name').value;
  const player1 = Player(name1, 'X');
  const player2 = Player(name2, 'O');
  // return {player1, player2, moves}
  // }

  let currentPlayer = player1;
  let playerSwitch = () => {
    if (currentPlayer == player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
    moves++;
  };
  let sleep = (milliseconds) => {
    const start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  };

  let reset = () => {
    sleep(2000);
    document.getElementById(1).innerHTML = ('');
    document.getElementById(2).innerHTML = ('');
    document.getElementById(3).innerHTML = ('');
    document.getElementById(4).innerHTML = ('');
    document.getElementById(5).innerHTML = ('');
    document.getElementById(6).innerHTML = ('');
    document.getElementById(7).innerHTML = ('');
    document.getElementById(8).innerHTML = ('');
    document.getElementById(9).innerHTML = ('');
  };


  // let drawCheck = () => {

  // };

  // let playGame= () => {

  // configGame
  // ciclo

  // currentPlayer.getMark;
  /* if (currentPlayer.win) {
    //break;
  }

  drawCheck;
  if (draw) {
    //break;
  } */
};

// document.getElementById('startGame').addEventListener('click', gameFlow);

// }

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
