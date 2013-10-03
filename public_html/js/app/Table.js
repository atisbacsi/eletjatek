define(["app/Cell", "app/Coordinate", "app/NativeTable"], function(Cell, Coordinate, NativeTable) {
    return function Table(x, y) {
        this.__proto__ = new NativeTable(x, y);

        this.getCell = function(coord) {
            if (coord.constructor === Coordinate) {
                if (coord.getX() < this.getXSize() && coord.getY() < this.getYSize()) {
                    var ret = new Cell(this, coord);
                    return ret;
                } else {
                    throw new function InvalidCoordinateException() {
                    };
                }
            }
        };

        this.setTable = function(pTable) {
            if (pTable.constructor === Array) {
                for (x in pTable) {
                    for (y in pTable[x]) {
                        this.getCell(new Coordinate(x, y)).setLive(pTable[x][y]);
                    }
                }
            } else {
                throw new function InvalidArgumentException() {
                };
            }
        };

        this.copyTable = function(pTable) {
            var maxX = (pTable.getXSize() < this.getXSize()) ? this.getXSize() : pTable.getXSize();
            var maxY = (pTable.getYSize() < this.getYSize()) ? this.getYSize() : pTable.getYSize();

            for (var x = 0; x < maxX; x++) {
                for (var y = 0; y < maxY; y++) {
                    this.getCell(new Coordinate(x, y)).setLive(pTable.getCell(new Coordinate(x, y)).isLive());
                }
            }
        };

        this.getTable = function() {
            return this._table;
        };

        this.getNeighbourCells = function(pCell) {
            if (pCell.constructor === Cell) {
                var coord = pCell.getCoord();
                var neighbourCells = Array();
                var x = coord.getX();
                var y = coord.getY();

                this._addNotNullCell(neighbourCells, x - 1, y - 1);
                this._addNotNullCell(neighbourCells, x - 1, y);
                this._addNotNullCell(neighbourCells, x - 1, y + 1);
                this._addNotNullCell(neighbourCells, x, y - 1);
                this._addNotNullCell(neighbourCells, x, y + 1);
                this._addNotNullCell(neighbourCells, x + 1, y - 1);
                this._addNotNullCell(neighbourCells, x + 1, y);
                this._addNotNullCell(neighbourCells, x + 1, y + 1);

                return neighbourCells;
            }
        };

        this._addNotNullCell = function(neighbourCells, x, y) {
            if (this._checkXCoord(x) && this._checkYCoord(y)) {
                var cell = this.getCell(new Coordinate(x, y));
                neighbourCells.push(cell);
            }
        };
        this._checkXCoord = function(x) {
            return 0 <= x && x < this.getXSize();
        };
        this._checkYCoord = function(y) {
            return 0 <= y && y < this.getYSize();
        };
    };
});
