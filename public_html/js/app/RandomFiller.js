define(["app/Table", "app/Coordinate", "app/Cell"], function(Table, Coordinate, Cell) {
    return function RandomFiller(pTable, pDensity) {
        var table = pTable;
        var density = pDensity;

        this.fill = function() {
            if(density > 0 && density <= 1) {
                //noop
            } else {
                density = Math.random();
            }
            
            var numOfPixels = table.getXSize() * table.getYSize();
            
            for(var i = 0; i<(numOfPixels * density); i++) {
                var x = Math.floor(Math.random() * table.getXSize());
                var y = Math.floor(Math.random() * table.getYSize());
                var cell = table.getCell(new Coordinate(x,y));
                
                cell.setLive(true);
            }
        };
    };
});