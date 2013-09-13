define(["app/Cell","app/Coordinate"], function(Cell,Coordinate) {
	return function Table(x, y) {
		var xSize = x;
		var ySize = y;

		this._table = new Array();
		for (var x = 0; x<xSize; x++){
			this._table[x] = new Array();
			for (var y = 0; y<ySize; y++){
				this._table[x][y] = false;
			}
		}

		this.getXSize = function() {
			return xSize;
		};
		this.getYSize = function() {
			return ySize;
		};
		
		this.setTable = function(pTable){
			this._table = pTable;
			xSize = this._table.length;
			ySize = this._table[0].length;
		};

		this.getCell = function(coord) {
			if (coord.constructor === Coordinate) {
				if (coord.x < xSize && coord.y < ySize) {
					return new Cell(this, coord);
				} else {
					return null;
					// Throw an exception;
				}
			}
		};
		this._getCell = function(x, y) {
			if (x>-1 && y>-1) {
				var coord = new Coordinate(x, y);
				return this.getCell(coord);
			} else {
				return null;
			}
		};
		this.getNeighbourCells = function(pCell) {
			if (pCell.constructor === Cell) {
				var coord = pCell.getCoord();
				var neighbourCells = Array();

				this._addNotNullCell(neighbourCells, this._getCell(coord.x - 1, coord.y - 1));
				this._addNotNullCell(neighbourCells, this._getCell(coord.x - 1, coord.y));
				this._addNotNullCell(neighbourCells, this._getCell(coord.x - 1, coord.y + 1));
				this._addNotNullCell(neighbourCells, this._getCell(coord.x + 1, coord.y - 1));
				this._addNotNullCell(neighbourCells, this._getCell(coord.x + 1, coord.y));
				this._addNotNullCell(neighbourCells, this._getCell(coord.x + 1, coord.y + 1));
				this._addNotNullCell(neighbourCells, this._getCell(coord.x, coord.y - 1));
				this._addNotNullCell(neighbourCells, this._getCell(coord.x, coord.y + 1));
				
				return neighbourCells;
			}
		};
		this._addNotNullCell = function(neighbourCells, cell) {
			if (cell != null) {
				neighbourCells.push(cell);
			}
		};
		this.setCell = function(coord, cell) {
			if (coord.constructor === Coordinate && cell.constructor === Cell) {
				this._ [coord.x][coord.y] = cell.isLive();
			}
		};
	};
});
