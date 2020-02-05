const gameBoard () => {
    const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X",]

}();

let boardDev = () => {
    const boxSize = 150 + "px"; // cambiar nombre!
        const container = document.getElementById("boardContainer");

        container.style.gridTemplateColumns = `repeat(3, 1fr)`;
        container.style.gridTemplateRows = `repeat(3, 1fr)`;

        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                let div = document.createElement("div");
                div.style.width = boxSize;
                div.style.height = boxSize;
                div.classList.add("boxes"); // cambiar nombre!
                div.setAttribute("id", "div" + i + j);
                container.appendChild(div);
            }
        };
}


const player = (name) => {
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
        win,
        score
    }
}

let configGame = () => {
    let name1= getElementById("");
    let name2= getElementById("");
    let player1 = new player(name);
    let player2 = new player(name);

    let moves = 0
    return {player1, player2, moves}
}

let gameStart = () => {



}



/* if (player1.win) {
        //player 1 wins 
    } else {
        if moves == 9
        //draw
    }
    moves++
    }*/