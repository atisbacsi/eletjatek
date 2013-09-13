define(["app/CanvasTable", "app/Live"], function(CanvasTable, Live) {
    return function Start() {
        var canvas = document.getElementById('canvas');
        var table = new CanvasTable(canvas);
        var live = new Live(table);
        this.go = function() {
            table.setTable(
                    [
                        [false, false, false, false, false],
                        [false, false, true, false, false],
                        [false, false, true, false, false],
                        [false, false, true, false, false],
                        [false, false, false, false, false],
                    ]
                    );

//            live.getTableNextYear();
//            live.getTableNextYear();
//            live.getTableNextYear();
//            live.getTableNextYear();
            var i = 0;
            var sec = 1000;

            var waitXSec = function () {
                i++;
                if (i < 20) {
                    setTimeout(waitXSec, 1000 * sec);
                    live.getTableNextYear();
                    console.log("a");
                }
            }
            waitXSec();
        };
    };
});
