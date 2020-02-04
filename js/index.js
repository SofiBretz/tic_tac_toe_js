const gameBoard() => {
    const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X", ]

}();

const player = (name, symbol) => {
    const array = [];
    let win = false;
    let checkWinner() => {
        const winingCompositions = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ]

        for (let i = 0, i = 8, i++) {
            if ((winingCompositions[i] - array) == null) {
                win = true
            }
        }
    }();
    return {
        name,
        symbol,
        win
    }
}

let player 1 = new player(name, symbol)

let moves = 0
if (player1.win) {
    //player 1 wins 
} else {
    if moves == 9
    //draw
}
moves++
}