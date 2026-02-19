import Piece from './piece.js';
class Queen extends Piece {
    constructor() {
        super();
        this._piece = "queen";
    }

    Highlight(boardState, square) {
        square.button.classList.toggle("selected");
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX == square.squarePosX && sq.squarePosY > square.squarePosY).sort((a, b) => a.squarePosY - b.squarePosY));
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX > square.squarePosX && sq.squarePosY > square.squarePosY && sq.squarePosX - sq.squarePosY == square.squarePosX - square.squarePosY).sort((a, b) => a.squarePosX - b.squarePosX));
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX > square.squarePosX && sq.squarePosY == square.squarePosY).sort((a, b) => a.squarePosX - b.squarePosX));
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX > square.squarePosX && sq.squarePosY < square.squarePosY && sq.squarePosX + sq.squarePosY == square.squarePosX + square.squarePosY).sort((a, b) => a.squarePosX - b.squarePosX));
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX == square.squarePosX && sq.squarePosY < square.squarePosY).sort((a, b) => b.squarePosY - a.squarePosY));
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX < square.squarePosX && sq.squarePosY < square.squarePosY && sq.squarePosX - sq.squarePosY == square.squarePosX - square.squarePosY).sort((a, b) => b.squarePosX - a.squarePosX));
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX < square.squarePosX && sq.squarePosY == square.squarePosY).sort((a, b) => b.squarePosX - a.squarePosX));
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX < square.squarePosX && sq.squarePosY > square.squarePosY && sq.squarePosX + sq.squarePosY == square.squarePosX + square.squarePosY).sort((a, b) => b.squarePosX - a.squarePosX));
    }

    SetDisplay(button) {
        button.textContent = "♛";
        if (this._color == "white")
            button.classList.add("white");
        else
            button.classList.add("black");
        this.SetLabel(button)
    }
}

export default Queen;