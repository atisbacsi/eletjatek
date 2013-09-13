"use strict";
define(["app/Cell", "app/Table", "app/Coordinate", "QUnit"], function(Cell, Table, Coordinate, qunit) {
    var TableTest = {
        test: function() {
            var sizeX = 3;
            var sizeY = 6;
            test("Test table cells", function() {
                var table = new Table(sizeX, sizeY);
                var cellMiddle = new Cell(table, new Coordinate(1, 1));
                var cell1 = new Cell(table, new Coordinate(0, 0));
                var cell2 = new Cell(table, new Coordinate(2, 0));
                var cell3 = new Cell(table, new Coordinate(0, 5));
                var cell4 = new Cell(table, new Coordinate(1, 4));

                cellMiddle.setLive(true);
                equal(cell1.isLive(), false, "Check not middle cell");
                equal(cell2.isLive(), false, "Check not middle cell");
                equal(cell3.isLive(), false, "Check not middle cell");
                equal(cell4.isLive(), false, "Check not middle cell");
            });
            test("Table sizes", function() {
                var table = new Table(sizeX, sizeY);

                equal(table.getXSize(), sizeX, "X Size");
                equal(table.getYSize(), sizeY, "Y Size");
            });

            test("Table.setTable() (A 3x3 table)", function() {
                var table = new Table(sizeX, sizeY);
                var cell1 = new Cell(table, new Coordinate(0, 0));
                var cell2 = new Cell(table, new Coordinate(2, 0));
                var cell3 = new Cell(table, new Coordinate(0, 5));

                table.setTable([
                    [true, false, true],
                    [false, true, false],
                    [true, false, true],
                ]
                        );
                equal(cell1.isLive(), true, "(0,0): true");
                equal(cell2.isLive(), true, "(2,0): true");
                cell3 = new Cell(table, new Coordinate(0, 1));
                equal(cell3.isLive(), false, "(0,1): false");
                cell3 = new Cell(table, new Coordinate(1, 1));
                equal(cell3.isLive(), true, "(1,1): true");
                cell3 = new Cell(table, new Coordinate(2, 1));
                equal(cell3.isLive(), false, "(2,1): false");
                try {
                    cell3 = new Cell(table, new Coordinate(9, 9));
                    ok(false, "False coordinates (9,9)");
                } catch (e) {
                    ok(true, "False coordinates (9,9)");
                }

            });
            
            test("Table.getCell()", function() {
                var table = new Table(sizeX, sizeY);

                table.setTable([
                    [true, false, true],
                    [false, true, false],
                    [true, false, true],
                ]);
                var cell2 = table.getCell(new Coordinate(0, 0));
                var cell1 = new Cell(table, new Coordinate(0, 0));

                equal(cell2.isLive(), true, "getCell() invocation");
                equal(cell1.isLive(), cell2.isLive(), "2 type of cell definition");
                cell2.setLive(false);
                equal(cell1.isLive(), false, "check setted value");
            });
            test("Table.getNeighbourCells()", function() {
                var table = new Table(sizeX, sizeY);

                table.setTable([
                    [false, false, false, false, false],
                    [false, true, false, true, false],
                    [false, false, true, false, false],
                    [false, true, false, true, false],
                    [false, false, false, false, false],
                ]);
                var middleX = 2;
                var middleY = 1;
                var cellMiddle = table.getCell(new Coordinate(middleX,middleY));
                var nCells = table.getNeighbourCells(cellMiddle);
                equal(nCells.length,8, "Number of neighbours = 8. Coord:("+middleX+","+middleY+") ");
                for (var c in nCells){
                    var x = nCells[c].getCoord().getX();
                    var y = nCells[c].getCoord().getY();
                    var diffX = Math.abs(x-middleX);
                    var diffY = Math.abs(y-middleY);
                    if (diffX < 2 && diffY < 2) {
                        ok(true, "Coordinates ("+x+","+y+") are neighbour-alike");
                    }
                }
            });
        },
    };
    return TableTest;
});
