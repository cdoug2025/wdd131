import Piece from './piece.js';
class Knight extends Piece {
    constructor() {
        super();
        this._piece = "knight";
    }

    Highlight(boardState, square) {
        square.button.classList.toggle("selected");
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX == square.squarePosX + 1 && sq.squarePosY == square.squarePosY + 2));
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX == square.squarePosX + 2 && sq.squarePosY == square.squarePosY + 1));
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX == square.squarePosX + 2 && sq.squarePosY == square.squarePosY - 1));
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX == square.squarePosX + 1 && sq.squarePosY == square.squarePosY - 2));
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX == square.squarePosX - 1 && sq.squarePosY == square.squarePosY - 2));
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX == square.squarePosX - 2 && sq.squarePosY == square.squarePosY - 1));
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX == square.squarePosX - 2 && sq.squarePosY == square.squarePosY + 1));
        square.piece.HighlightGroup(square, boardState.filter(sq => sq.squarePosX == square.squarePosX - 1 && sq.squarePosY == square.squarePosY + 2));
    }

    SetDisplay(button) {
        button.textContent = "♞";
        if (this._color == "white")
            button.classList.add("white");
        else
            button.classList.add("black");
        this.SetLabel(button)
    }
}

export default Knight;