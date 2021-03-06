define([], function() {
    return function NativeTable(x, y) {
        var xSize = x;
        var ySize = y;

        this._table = new Array();
        for (var x = 0; x < xSize; x++) {
            this._table[x] = new Array();
            for (var y = 0; y < ySize; y++) {
                this._table[x][y] = false;
            }
        }

        this._setCell = function(x, y, value) {
            if ((x > -1 && y > -1) && (x < xSize) && (y < ySize)) {
                if (value === null || value === true) {
                    this._table[x][y] = true;
                } else {
                    this._table[x][y] = false;
                }
            } else {
                throw new function InvalidCellException() {
                };
            }
        };

        this._getCell = function(x, y) {
            if ((x > -1 && y > -1) && (x < xSize) && (y < ySize)) {
                return this._table[x][y];
            } else {
                throw new function InvalidCellException() {
                };
            }
        };

        this.getXSize = function() {
            return xSize;
        };
        this.getYSize = function() {
            return ySize;
        };

        this.logContent = function() {
            if (console !== null) {
                console.log(JSON.stringify(this._table));
            }
        };
    };
});
