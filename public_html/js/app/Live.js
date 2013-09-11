define(["app/Table", "app/Coordinate", "app/Cell", "app/TableCellIterator"], function(Table, Coordinate,Cell,TableCellIterator){
	
	return function Live(pTable){
	    var table = pTable;
	    this.decide = function(pCell){
	        var countOfLiveCells = this._countNeighbourLiveCells(pCell);

	        if(countOfLiveCells > 3) {
	            return false;           
	        } else if(countOfLiveCells == 3) {
	            return true
	        } else if(countOfLiveCells > 1 && pCell.isLive()) {
	            return true;
	        } else {
	        	return false;
	        }
	    }
	    
	    this._countNeighbourLiveCells = function(pCell){
	        var neighbours = table.getNeighbourCells(pCell);
	        
	        var countOfLiveCells = 0;
	        for(var key in neighbours) {
	            if(neighbours[key].isLive()){
	                countOfLiveCells++;
	            }
	        }
	        return countOfLiveCells;
	    }
	    
	    this.getTableNextYear = function(){
	    	var tableNew = new Table(table.getXSize(), table.getYSize());
	    	var tableIterator = new TableCellIterator(table);
	    	while(tableIterator.hasNext()) {
	    		var actualCell = tableIterator.getNextCell();
	    		var decision = this.decide(actualCell);
	    		tableNew.getCell(actualCell.getCoord()).setLive(decision);
	    	}
	    	table = tableNew;
	    	return table;
	    };
	}; 
});

