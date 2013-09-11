"use strict";
define(["app/Cell", "app/Table", "app/Coordinate", "QUnit"], function(Cell, Table, Coordinate, qunit) {
    var TestCell = {
        test1: function() {
            var xCoord = 1;
            var yCoord = 0;
            var table = new Table(2, 2);
            var cell1 = new Cell(table, new Coordinate(xCoord, yCoord));
            test("Basic functions", function() {
                equal(cell1.isLive(), false, "Default not live");
                equal(cell1.getCoord().x, xCoord, "x coord check");
                equal(cell1.getCoord().y, yCoord, "y coord check");
            });
        },
        test2: function() {
            var table = new Table(1, 1);
            var cell1 = new Cell(table, new Coordinate(0, 0));
            test("set and get live parameter", function() {
                cell1.setLive(true);
                equal(cell1.isLive(), true);
            });
        }
    };
    return TestCell;
});

