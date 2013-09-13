define([], function(){
	return function Coordinate(x, y) {
		
		if (x == null && y == null) {
			throw "Illegal Argument Exception";
		}
		var _x = 0;
		var _y = 0;
		
		if (x > -1) {
			_x = x*1;
		}
		if (y > -1) {
			_y = y*1;
		}
		this.getX = function(){return _x};
		this.getY = function(){return _y};
	};
});
