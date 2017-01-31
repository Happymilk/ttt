class TicTacToe {
    constructor() {
        this.playerId = 0;
        this.field = [
            [null, null, null], 
            [null, null, null], 
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.playerId == 0 ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex) == null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.playerId == 0 ? this.playerId = 1 : this.playerId = 0;
        }
    }

    isFinished() {
        return this.noMoreTurns() == true || this.getWinner() != null ? true : false;
    }

    getWinner() {
        var tmp = null;
        
        for (var i = 0; i <= 2; i++) {
            if (this.field[0][i] == this.field[1][i] && this.field[1][i] == this.field[2][i] && this.field[0][i] != null)
                tmp = this.field[0][i];
            if (this.field[i][0] == this.field[i][1] && this.field[i][1] == this.field[i][2] && this.field[i][0] != null)
                tmp = this.field[i][0];
        }

        if (this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2] && this.field[0][0] != null) 
            tmp = this.field[2][2];
        if (this.field[0][2] == this.field[1][1] && this.field[1][1] == this.field[2][0] && this.field[0][2] != null) 
            tmp = this.field[2][0];

        return tmp;
    }

    noMoreTurns() {
        for (var i = 0; i <= 2; i++) 
            for (var j = 0; j <= 2; j++) 
                if (this.field[i][j] == null) 
                    return false;
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() == null ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;