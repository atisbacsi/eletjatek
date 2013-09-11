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
            var cell2 = new Cell(table, new Coordinate(0, 0));
            test("set and get live parameter", function() {
                cell1.setLive(true);
                equal(cell1.isLive(), cell2.isLive(), "1. Check live after set");
                equal(table._table[0][0], true,"1. Check database in table");
                cell1.setLive(false);
                equal(cell1.isLive(), cell2.isLive(), "2. Check (false value) live after set");
                equal(table._table[0][0], false,"2. Check (false value) database in table");
            });
        },
        test3: function() {
            var table = new Table(3, 3);
            var cellMiddle = new Cell(table, new Coordinate(1, 1));
            var cell1 = new Cell(table, new Coordinate(0, 0));
            var cell2 = new Cell(table, new Coordinate(2, 0));
            var cell3 = new Cell(table, new Coordinate(0, 2));
            var cell4 = new Cell(table, new Coordinate(1, 0));
            test("set and get live parameter", function() {
                cellMiddle.setLive(true);
                equal(cell1.isLive(), cell2.isLive(), "1. Check live after set");
                equal(table._table[0][0], true,"1. Check database in table");
                cell1.setLive(false);
                equal(cell1.isLive(), cell2.isLive(), "2. Check (false value) live after set");
                equal(table._table[0][0], false,"2. Check (false value) database in table");
            });
        },
    };
    return TestCell;
});

