import Piece from './piece.js';
class Pawn extends Piece {
    constructor() {
        super();
        this._piece = "pawn";
    }

    Highlight(boardState, square) {
        square.button.classList.toggle("selected");
        if (square.piece.color == "white") {
            if (square.piece._moved == true)
                square.piece.HighlightGroupMovement(boardState.filter(sq => sq.squarePosX == square.squarePosX && sq.squarePosY == square.squarePosY + 1));
            else
                square.piece.HighlightGroupMovement(boardState.filter(sq => sq.squarePosX == square.squarePosX && sq.squarePosY == square.squarePosY + 1 || sq.squarePosX == square.squarePosX && sq.squarePosY == square.squarePosY + 2).sort((a, b) => a.squarePosY - b.squarePosY));
            square.piece.HighlightGroupCapture(square, boardState.filter(sq => sq.squarePosX == square.squarePosX + 1 && sq.squarePosY == square.squarePosY + 1));
            square.piece.HighlightGroupCapture(square, boardState.filter(sq => sq.squarePosX == square.squarePosX - 1 && sq.squarePosY == square.squarePosY + 1));
        }
        else {
            if (square.piece._moved == true)
                square.piece.HighlightGroupMovement(boardState.filter(sq => sq.squarePosX == square.squarePosX && sq.squarePosY == square.squarePosY - 1));
            else
                square.piece.HighlightGroupMovement(boardState.filter(sq => sq.squarePosX == square.squarePosX && sq.squarePosY == square.squarePosY - 1 || sq.squarePosX == square.squarePosX && sq.squarePosY == square.squarePosY - 2).sort((a, b) => b.squarePosY - a.squarePosY));
            square.piece.HighlightGroupCapture(square, boardState.filter(sq => sq.squarePosX == square.squarePosX + 1 && sq.squarePosY == square.squarePosY - 1));
            square.piece.HighlightGroupCapture(square, boardState.filter(sq => sq.squarePosX == square.squarePosX - 1 && sq.squarePosY == square.squarePosY - 1));
        }
    }

    HighlightGroupMovement(group) {
        for (let i = 0; i < group.length; i++) {
            let sq = group[i]
            if (sq.piece == null) {
                sq.button.classList.toggle("movement");
            }
            else {
                return;
            }
        }
    }

    HighlightGroupCapture(square, group) {
        for (let i = 0; i < group.length; i++) {
            let sq = group[i]
            if (sq.piece != null) {
                if (sq.piece.controlledBy == square.piece.controlledBy) {
                    return;
                }
                else {
                    sq.button.classList.toggle("capture");
                    return;
                }
            }
        }
    }

    SetDisplay(button) {
        button.textContent = "♟";
        if (this._color == "white")
            button.classList.add("white");
        else
            button.classList.add("black");
        this.SetLabel(button)
    }
}

export default Pawn;