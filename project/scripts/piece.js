// ABSTRACT CLASS DO NOT USE

class Piece {
    constructor() {
        if (new.target === Piece) {
            throw new Error("Class is abstract and shouldn't be instantiated")
        }
        else {
            this._controlledBy = "";
            this._color = "";
            this._moved = false;
        }
    }

    Recreate(piece, controlledBy, color, moved) {
        this._piece = piece;
        this._controlledBy = controlledBy;
        this._color = color;
        this._moved = moved;
    }

    // Getters
    get controlledBy() {
        return this._controlledBy;
    }

    get color() {
        return this._color;
    }

    get moved() {
        return this._moved;
    }

    // Setters
    set controlledBy(player) {
        this._controlledBy = player;
    }

    set color(color) {
        this._color = color;
    }

    set moved(moved) {
        this._moved = moved;
    }

    // Methods
    ShowMove(boardState, square) {
        let selectedSquare = boardState.find(sq => sq.button.classList.contains("selected"));
        if (selectedSquare)
            selectedSquare.piece.Highlight(boardState, selectedSquare);
        if (square != selectedSquare)
            square.piece.Highlight(boardState, square);
    }

    Move(boardState, square, selectedSquare) {
        // Get rid of highlights
        selectedSquare.piece.Highlight(boardState, selectedSquare);

        // Create piece at location moved to
        square.piece = selectedSquare.piece;
        square.button.textContent = selectedSquare.button.textContent;
        square.piece.moved = true;
        let squareLabel = square.button.getAttribute("aria-label").split(" ");
        let selectedSquareLabel = selectedSquare.button.getAttribute("aria-label").split(" ");
        square.button.setAttribute("aria-label", `${squareLabel[0]} ${squareLabel[1]} ${selectedSquareLabel[2]} ${selectedSquareLabel[3]}`)

        // Remove piece that moved
        selectedSquare.piece = null;
        selectedSquare.button.textContent = "";
        selectedSquare.button.setAttribute("aria-label", `${selectedSquareLabel[0]} empty`)

        // Set colors of piece and squares
        selectedSquare.button.classList.remove("white");
        selectedSquare.button.classList.remove("black");
        if (square.piece.color == "white") {
            square.button.classList.add("white");
            square.button.classList.remove("black");
        }
        else {
            square.button.classList.add("black");
            square.button.classList.remove("white");
        }
        
        // Temporary Win Detection for Capturing Opponents King
        if(squareLabel[3] == "king") {
            square.button.textContent = "🏆";
        }

        return true;
    }

    Highlight(boardState, square) {
        throw new Error("This method must be overridden.");
    }

    // group: The possible movement squares being highlighted
    // sqaure: The square of the piece that is moving
    // sq: The possible movement square of the piece
    HighlightGroup(square, group) {
        for (let i = 0; i < group.length; i++) {
            let sq = group[i]

            // Check for check
            let sqPieceHolder = sq.piece;
            sq.piece = square.piece;
            square.piece = null; 
            let check = false; // TODO: check for check
            square.piece = sq.piece;
            sq.piece = sqPieceHolder;

            // If move isn't check, check for movement
            if (!check){
                if (sq.piece == null) {
                    sq.button.classList.toggle("movement");
                }
                else {
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
    }

    SetDisplay(button) {
        throw new Error("This method must be overridden.");
    }

    SetLabel(button) {
        let labelHolder = button.getAttribute("aria-label").split(" ");
        button.setAttribute("aria-label", `${labelHolder[0]} ${labelHolder[1]} ${this._color} ${this._piece}`)
    }
}

export default Piece;