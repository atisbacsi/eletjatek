define([], function() {

    return function Ticker(pFunc) {
        var func = pFunc;
        var speed = 500;
        var countup = 0;
        var step = 20;
        var runID;
        
        this.setSpeed = function(pSpeed){
            speed = pSpeed;
        };
        this.getSpeed = function(){
            return speed;
        };
        
        this.start = function(e) {
            runID = setInterval(this._run, step);
        };
        this.stop = function(){
            clearInterval(runID);
        };
        
        this._run = function() {
            if (countup >= speed) {
                countup = 0;
                func();
            } else {
                countup += step;
            }
        };
        
    };
});