// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

requirejs.config({
    "baseUrl": "js/libs",
    "paths": {
      "jquery": "libs/jquery-1.8.0.min",
      "modernizr": "libs/modernizr-2.6.1.min",
      "ocanvas": "libs/ocanvas.min",
//      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
      "app" : "../app",
      
    }
});

// Load the main app module to start the app
requirejs(["app/Start"], function(Start) {
	start = new Start();
//	start.init();
});

