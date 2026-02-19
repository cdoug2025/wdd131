// Inport Classes
import King from './king.js';
import Queen from './queen.js';
import Rook from './rook.js';
import Bishop from './bishop.js';
import Knight from './knight.js';
import Pawn from './pawn.js';

// Declaring Constants
const chessBoard = document.getElementById("chess-board");
const saveButton = document.getElementById("save");
const loadButton = document.getElementById("load");

// Initialize boardState and playerTurn from local storage
let playerTurn = "p1";
let boardState = GenerateDefaultBoard();
DisplayBoard(boardState);

// Functions
function GenerateDefaultBoard() {
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
            // Place Back Rows
            if (y == 1 || y == 8) {
                
                // Place Rooks
                if (x == 1 || x == 8) {
                    square.piece = new Rook();
                }

                // Place Knights
                else if (x == 2 || x == 7) {
                    square.piece = new Knight();
                }

                // Place Bishops
                else if (x == 3 || x == 6) {
                    square.piece = new Bishop();
                }

                // Place Queen
                else if (x == 4) {
                    square.piece = new Queen();
                }

                // Place King
                else if (x == 5) {
                    square.piece = new King();
                }
            }
            
            // Place Pawns
            else if (y == 2 || y == 7) {
                square.piece = new Pawn();
            }
            
            // Set white pieces to be controlled by p1
            if (y == 1 || y == 2) {
                square.piece.controlledBy = "p1";
                square.piece.color = "white";
            }

            // Set black pieces to be controlled by p2
            else if (y == 7 || y == 8) {
                square.piece.controlledBy = "p2";
                square.piece.color = "black";
            }

            if (square.piece != null)
                square.piece.SetDisplay(square.button);

            // Add event listeners to square
            AddEventListener(square)
            
            boardState.push(square);
        }
    }
    return boardState;
}

function DisplayBoard() {
    boardState.forEach(square => {
        //display square to the board
        chessBoard.appendChild(square.button)
    });
}

function RetrieveBoard() {
    let boardState = JSON.parse(localStorage.getItem("boardState")) || false;
    if (boardState == false)
        return false;
    else {
        boardState.forEach(square => {
            // Create Button
            square.button = document.createElement("button");
            square.button.setAttribute("type", "button")
            square.button.setAttribute("aria-label", `${NumberToLetter(square.squarePosX)} ${square.squarePosY} empty`)

            // Add class for checkerboard pattern
            if (square.squarePosY % 2 == 0)
                square.button.classList.add("even-row");

            // Recreate Piece
            let pieceHolder = square.piece
            if (square.piece != null) {
                if (square.piece._piece == "king") {
                    square.piece = new King();
                }
                else if (square.piece._piece == "queen") {
                    square.piece = new Queen();
                }
                else if (square.piece._piece == "rook") {
                    square.piece = new Rook();
                }
                else if (square.piece._piece == "bishop") {
                    square.piece = new Bishop();
                }
                else if (square.piece._piece == "knight") {
                    square.piece = new Knight();
                }
                else if (square.piece._piece == "pawn") {
                    square.piece = new Pawn();
                }
                square.piece.Recreate(pieceHolder._piece, pieceHolder._controlledBy, pieceHolder._color, pieceHolder._moved)
            }

            // Set the display of the button
            if (square.piece != null)
                square.piece.SetDisplay(square.button);
            
            // Add event listener to square
            AddEventListener(square)
        });
    }
    return boardState;
}

function AddEventListener(square) {
    square.button.addEventListener("click", () => {
                
        // If piece that is controlled by player whose turn it is, highlight or remove movement squares
        if (square.piece != null && square.piece.controlledBy == playerTurn) {
            square.piece.ShowMove(boardState, square);
        }

        // Move the selected piece if a movement or capture square is clicked
        else if (square.button.classList.contains("movement") || square.button.classList.contains("capture")) {
            let selectedSquare = boardState.find(sq => sq.button.classList.contains("selected"));
            let changeTurn = selectedSquare.piece.Move(boardState, square, selectedSquare); // Returns true if the turn should be changed (promotion caused this)
                    
            // Pawn promotion
            if (square.piece instanceof Pawn && square.piece.color == "white" && square.squarePosY == 8) {
                square.piece = new Queen();
                square.piece.controlledBy = "p1";
                square.piece.color = "white";
                square.piece.moved = "true";
                square.button.textContent = "♛";
            }
            else if (square.piece instanceof Pawn && square.piece.color == "black" && square.squarePosY == 1) {
                square.piece = new Queen();
                square.piece.controlledBy = "p2";
                square.piece.color = "black";
                square.piece.moved = "true";
                square.button.textContent = "♛";
            }

            // Change Turn
            if (changeTurn)
            {
                if (playerTurn == "p1")
                    playerTurn = "p2";
                else
                    playerTurn = "p1";
                square.piece.moved = true;
            }
        }
    });
}

function NumberToLetter(number) {
    return String.fromCharCode(64 + number);
}

// Add event listener for save button
saveButton.addEventListener("click", () => {
    localStorage.setItem("boardState", JSON.stringify(boardState));
    localStorage.setItem("playerTurn", playerTurn);
});

// Add event listener for load button
loadButton.addEventListener("click", () => {
    playerTurn = localStorage.getItem("playerTurn") || "p1";
    while (chessBoard.firstChild) {
        chessBoard.removeChild(chessBoard.firstChild);
    }
    boardState = RetrieveBoard() || GenerateDefaultBoard();
    DisplayBoard();
});