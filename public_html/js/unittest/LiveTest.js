"use strict";
define(["app/Cell", "app/Table", "app/Coordinate", "QUnit"], function(Cell, Table, Coordinate, qunit) {
    var LiveTest = {
        testPattern1: function() {

            test("Live algorithm, Table 2x2", function() {
                var table = new Table(2, 2);
                var live = new Live(table);
                table.setTable(
                        [
                            [false, false],
                            [false, false]
                        ]);
                live.getTableNextYear();
                
                
            });
            test("Live algorithm, Pattern 1", function() {
                var table = new Table(5, 5);
                var live = new Live(table);
                table.setTable(
                        [
                            [false, false, false, false, false],
                            [false, false, true, false, false],
                            [false, false, true, false, false],
                            [false, false, true, false, false],
                            [false, false, false, false, false],
                        ]
                        );

                equal(cell1.isLive(), false, "Default not live");
                equal(cell1.getCoord().getX(), xCoord, "x coord check");
                equal(cell1.getCoord().getY(), yCoord, "y coord check");
            });
        },
    };
    return LiveTest;
});