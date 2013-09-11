"use strict";
define(["app/Cell", "app/Table", "app/Coordinate", "QUnit"], function(Cell, Table, Coordinate, qunit) {
    var TableTest = {
        test: function() {
            var sizeX = 3;
            var sizeY = 6;
            var table = new Table(sizeX, sizeY);
            var cellMiddle = new Cell(table, new Coordinate(1, 1));
            var cell1 = new Cell(table, new Coordinate(0, 0));
            var cell2 = new Cell(table, new Coordinate(2, 0));
            var cell3 = new Cell(table, new Coordinate(0, 5));
            var cell4 = new Cell(table, new Coordinate(1, 4));
            test("Test table cells", function() {
                cellMiddle.setLive(true);
                equal(cell1.isLive(), false, "Check not middle cell");
                equal(cell2.isLive(), false, "Check not middle cell");
                equal(cell3.isLive(), false, "Check not middle cell");
                equal(cell4.isLive(), false, "Check not middle cell");
            });
            test("Table sizes", function() {
                equal(table.getXSize(), sizeX, "X Size");
                equal(table.getYSize(), sizeY, "Y Size");
            });

            test("Table.setTable()", function() {
                ok(true);
            });
            test("Table.setCell()", function() {
                ok(true);
            });
            test("Table.getCell()", function() {
                ok(true);
            });
            test("Table.getNeighbourCells()", function() {
                ok(true);
            });
        },
    };
    return TableTest;
});
