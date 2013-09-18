define(["app/CanvasTable", "app/Coordinate", "app/Cell"], function(Table, Coordinate, Cell) {

    return function CanvasClickAbility(pTable) {
        var table = pTable;
        var canvas = table.canvas;

        this.onclick = function(e) {

            var relX = e.offsetX;
            var relY = e.offsetY;

            var x = Math.floor(relY / table.getZoom());
            var y = Math.floor(relX / table.getZoom());
            console.log(canvas,"relX:", relX, "zoom:", table.getZoom(), "y:", y, "eredeti y:", (relX / table.getZoom()));
            var cell = table.getCell(new Coordinate(x, y));
            cell.setLive(!cell.isLive());
        };

        canvas.onclick = this.onclick;
    };
});

