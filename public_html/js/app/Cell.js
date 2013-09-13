define(["app/NativeTable", "app/Coordinate"], function(NativeTable, Coordinate) {
    return function Cell(pNativeTable, pCoordinate) {
//        if (pNativeTable.constructor !== NativeTable || pCoordinate !== Coordinate) {
//            throw new function InvalidArgumentException(){};
//        }
        
        var table = pNativeTable;
        var coord = pCoordinate;
        if (coord.getX() > table.getXSize() || coord.getY() > table.getYSize()) {
            throw new function InvalidCellException(){};
        }
        var live = table._getCell(coord.getX(), coord.getY());

        this.getCoord = function() {
            return coord;
        };
        this.setLive = function(pLive) {
            live = pLive === true;
            table._setCell(coord.getX(), coord.getY(), live);
        };
        this.isLive = function() {
            return table._getCell(coord.getX(), coord.getY());
        };
    };
});


