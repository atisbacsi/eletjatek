define(["app/Table", "app/Coordinate"], function(Table, Coordinate) {
    return function TableCellIterator(pTable) {
        var table = pTable;

        var pointer = {x: 0, y: 0};
        this.setToStart = function() {
            pointer = {x: 0, y: 0};
        };
        this.getNextCell = function() {
            var cell = table.getCell(new Coordinate(pointer.x, pointer.y));
            if (pointer.x < this._getMaxXCoord()) {
                pointer.x++;
            } else if (pointer.y < this._getMaxYCoord()) {
                pointer.x = 0;
                pointer.y++;
            }
            return cell;
        };
        this.hasNext = function() {
            if ((pointer.x == this._getMaxXCoord()) && (pointer.y == this._getMaxYCoord())) {
                return false;
            } else {
                return true;
            }
        };

        this._getMaxXCoord = function() {
            return table.getXSize() - 1;
        };
        this._getMaxYCoord = function() {
            return table.getYSize() - 1;
        };

    };

});

