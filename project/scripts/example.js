// Inport Classes
import King from './king.js';
import Queen from './queen.js';
import Rook from './rook.js';
import Bishop from './bishop.js';
import Knight from './knight.js';
import Pawn from './pawn.js';

// Declaring Constants
const chessBoard = document.getElementById("chess-board");

// Initialize boardState
let boardState = GenerateExampleBoard();
DisplayBoard(boardState);

// Functions
function GenerateExampleBoard() {
    // Create Return Array
    let boardState = [];

    // Generate Squares
    for (let y = 8; y >= 1; y--) {
        for (let x = 1; x <= 8; x++) {

            // Initialize Empty Square
            let square = {
                squarePosX: x,
                squarePosY: y,
                piece: null,
                button: document.createElement("button")
            };
            square.button.setAttribute("type", "button")
            square.button.setAttribute("aria-label", `${NumberToLetter(x)} ${y} empty`)

            // Affect even rows with a class to alternate colors in css, creating a checkerboard pattern
            if (y % 2 == 0)
                square.button.classList.add("even-row");
            
            // Place Pieces
            if (x == 1 && y == 8) {
                square.piece = new Queen();
                square.piece.controlledBy = "p2";
                square.piece.color = "black";
            }

            if (x == 2 && y == 5) {
                square.piece = new Pawn();
                square.piece.controlledBy = "p2";
                square.piece.color = "black";
                square.piece.moved = true;
            }

            if (x == 2 && y == 2) {
                square.piece = new Knight();
                square.piece.controlledBy = "p1";
                square.piece.color = "white";
            }

            if (x == 3 && y == 4) {
                square.piece = new Bishop();
                square.piece.controlledBy = "p1";
                square.piece.color = "white";
            }

            if (x == 5 && y == 2) {
                square.piece = new King();
                square.piece.controlledBy = "p1";
                square.piece.color = "white";
            }

            if (x == 4 && y == 6) {
                square.piece = new Knight();
                square.piece.controlledBy = "p2";
                square.piece.color = "black";
            }

            if (x == 5 && y == 8) {
                square.piece = new King();
                square.piece.controlledBy = "p2";
                square.piece.color = "black";
            }

            if (x == 6 && y == 2) {
                square.piece = new Pawn();
                square.piece.controlledBy = "p1";
                square.piece.color = "white";
            }

            if (x == 6 && y == 5) {
                square.piece = new Queen();
                square.piece.controlledBy = "p1";
                square.piece.color = "white";
            }

            if (x == 8 && y == 1) {
                square.piece = new Rook();
                square.piece.controlledBy = "p1";
                square.piece.color = "white";
            }

            if (x == 8 && y == 4) {
                square.piece = new Bishop();
                square.piece.controlledBy = "p2";
                square.piece.color = "black";
            }

            if (x == 8 && y == 8) {
                square.piece = new Knight();
                square.piece.controlledBy = "p2";
                square.piece.color = "black";
            }

            if (square.piece != null)
                square.piece.SetDisplay(square.button);

            // Add event listeners to square
            square.button.addEventListener("click", () => {
                
                // If piece that is controlled by player whose turn it is, highlight or remove movement squares
                if (square.piece != null) {
                    square.piece.ShowMove(boardState, square);
                }
            });
            boardState.push(square);
        }
    }
    return boardState;
}

function DisplayBoard(boardState) {
    boardState.forEach(square => {
        //display square to the board
        console.log(square.button)
        chessBoard.appendChild(square.button)
    });
}

function NumberToLetter(number) {
    return String.fromCharCode(64 + number);
}