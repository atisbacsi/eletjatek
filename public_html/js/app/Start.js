define(["app/CanvasTable", "app/Live", "app/CanvasClickAbility", "app/Ticker", "app/Filler","app/FillerSelector"], function(CanvasTable, Live, CanvasClickAbility, Ticker, Filler, FillerSelector) {
    return function Start() {

        var canvas;
        var start;
        var speedslider;
        var speeddisplay;
        var table;
        var filler;
        var fillerSelector;
        var dropDown;

        var printBtn;
        var clickFace;
        var live = new Live(table);
        var ticker;
        var running = false;

        var constructor = function() {

            getHtmlElements();
            setupTicker();
            setupTable();

        };

        var getHtmlElements = function() {
            canvas = document.getElementById('canvas');
            start = document.getElementById('startButton');
            printBtn = document.getElementById('print');
            speedslider = document.getElementById('speed');
            speeddisplay = document.getElementById('speedDisplay');
            dropDown = document.getElementById('pictureSelect');
        };

        var setupTicker = function() {
            ticker = new Ticker(run, speedslider.value);
            start.onclick = startClick;
            speedslider.onchange = speedChange;
        };

        var setupTable = function() {
            table = new CanvasTable(canvas, 5);
            clickFace = new CanvasClickAbility(table);
            filler = new Filler(table);
            fillerSelector = new FillerSelector(dropDown, filler);
            
            printBtn.onclick = function() {
                table.logContent();
            };
            live = new Live(table);

        };

        var run = function() {
            live.getTableNextYear();
        };

        var startClick = function() {
            if (!running) {
                ticker.start();
                start.value = "Stop";
            } else {
                ticker.stop();
                start.value = "Start";
            }
            running = !running;
        };

        var speedChange = function() {
            ticker.setSpeed(speedslider.value);
            speeddisplay.value = speedslider.value;
        };

        constructor();
    };
});
