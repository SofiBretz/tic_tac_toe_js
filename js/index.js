const gameBoard () => {
    const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X",]
}();

let reset = () => {
    document.getElementsByClassName("cell").addEventListener("click", ); //getMark
}

let getMark = () => {
    //cuando le haga clic a la celda nos diga que id se cliqueo
}


const player = (name, symbol) => {
    const array = [];
    let win = false;
    let score= 0;
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
        win,
        score
    }
}

let configGame = () => {
    let name1= getElementById("");
    let name2= getElementById("");
    let player1 = new player(name, 'X');
    let player2 = new player(name, 'O');
    let moves = 0;
    return {player1, player2, moves}
}

let gameStart = () => {
    player1
}



/* if (player1.win) {
        //player 1 wins 
    } else {
        if moves == 9
        //draw
    }
    moves++
    }*/