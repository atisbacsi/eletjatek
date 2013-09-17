define(["app/Table"], function(Table) {
    return function CanvasTable(canvas) {
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
        } else {
            throw new function NoCanvasAvailabeException() {
            };
        }
        var width = canvas.getAttribute("width")*1;
        var height = canvas.getAttribute("height")*1;
        this.__proto__ = new Table(width, height);
        
        this._setCell = function(x, y, value) {
            this.__proto__._setCell(x, y, value);
            if (value) {
                ctx.fillRect(y, x, 1, 1);
            } else {
                ctx.clearRect(y, x, 1, 1);
            }
        };
    };
});

