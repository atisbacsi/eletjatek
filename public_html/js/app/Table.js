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
            var cell = this.getCell(new Coordinate(x, y));
            if (cell !== null) {
                neighbourCells.push(cell);
            }
        };
    };
});
