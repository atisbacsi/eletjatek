define(["app/Table", "app/TableCellIterator"], function(Table, TableCellIterator) {
    return function CanvasTable(canvas, pZoom) {
        
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
        } else {
            throw new function NoCanvasAvailabeException() {
            };
        }
        
        this.canvas = canvas;
        
        var zoom = pZoom;
        var canvasWidth = canvas.getAttribute("height");
        var canvasHeight = canvas.getAttribute("width");
        var width = canvasWidth / zoom;
        var height = canvasHeight / zoom;

        this.__proto__ = new Table(width, height);

        this._setCell = function(x, y, value) {
            this.__proto__._setCell(x, y, value);
            if (value) {
                ctx.fillRect(y * zoom, x * zoom, zoom, zoom);
            } else {
                ctx.clearRect(y * zoom, x * zoom, zoom, zoom);
            }
        };
        this.refresh = function() {
            this._clearCanvas();

            var tableIterator = new TableCellIterator(this);
            while (tableIterator.hasNext()) {
                var actualCell = tableIterator.getNextCell();
                if (actualCell.isLive) {
                    ctx.fillRect(actualCell.getY() * zoom, actualCell.getX() * zoom, zoom, zoom);
                }
            }

        };

        this.getZoom = function() {
            return zoom;
        }
        this._clearCanvas = function() {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        };
    };
});

