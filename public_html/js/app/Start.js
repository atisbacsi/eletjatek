define(["app/CanvasTable", "app/Live", "app/CanvasClickAbility", "app/Ticker"], function(CanvasTable, Live, CanvasClickAbility, Ticker) {
    return function Start() {
        var canvas = document.getElementById('canvas');
        var start = document.getElementById('startButton');
        var speedslider = document.getElementById('speed');

        var table = new CanvasTable(canvas, 10);
        var live = new Live(table);
        var clickFace = new CanvasClickAbility(table);

        var running = false;

        var runner = function() {
            live.getTableNextYear();
        };

        var ticker = new Ticker(runner);


        this.init = function() {
            table.setTable(
                    [
                        [false, false, false, false, false, false],
                        [false, false, false, true, false, false],
                        [false, false, false, true, false, false],
                        [false, false, false, true, false, false],
                        [false, false, false, true, false, false],
                        [false, false, false, true, false, false],
                        [false, false, false, false, false, false],
                    ]
                    );

            speedslider.onchange = function() {
                ticker.setSpeed(speedslider.value);
            };
            start.onclick = function() {
                if (!running) {
                    ticker.start();
                } else {
                    ticker.stop();
                }
                running = !running;
            };
        };
    };
});
