define(["app/Table", "app/Coordinate"], function (Table, Coordinate) {
	return function Cell(pTable, pCoordinate){
	    var table = pTable;
	    var coord = pCoordinate;
	    var live = table._table[coord.x][coord.y];
	    
	    this.getCoord = function() {
	        return coord;
	    };
	    this.setLive = function(pLive){
	        live = pLive === true;
	        table._table[coord.x][coord.y] = live;
	    };
	    this.isLive = function(){
	        return table._table[coord.x][coord.y];
	    };
	};
});


