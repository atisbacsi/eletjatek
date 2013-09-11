define(["app/Table", "app/Live"],function(Table,Live){
	return function Start(){
		var table = new Table(4,4);
		var live = new Live(table);
		this.go = function(){
			table.setTable(
					[
					 [false, false, false, false, false],
					 [false, false, true, false, false],
					 [false, false, true, false, false],
					 [false,false, true, false, false],				 
					 [false,false, false, false, false],				 
					 ]
			);
			console.log(table);
			
			console.log(live.getTableNextYear());
		};
	};
});