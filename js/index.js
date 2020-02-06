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

    for (const x in winingCompositions) {
      if ((winingCompositions[x] - array) == null) {
        win = true;
      }
    }
  };


  return {
    name,
    array,
    symbol,
    win,
    score,
  };
};


const player1 = Player('test', 'x');
const getMark = (event) => {
  player1.array.push(parseInt(event.target.id));
  console.log(player1.array);
  console.log(player1.win);
};

for (const x of document.getElementsByClassName('cell')) {
  x.addEventListener('click', getMark);
}

// let configGame = () => {
//     let name1= getElementById("");
//     let name2= getElementById("");
//     let player1 = new player(name, 'X');
//     let player2 = new player(name, 'O');
//     let moves = 0;
//     return {player1, player2, moves}
// }

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
