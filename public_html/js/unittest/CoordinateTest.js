"use strict";
define([ "app/Coordinate", "QUnit"], function(Coordinate, QUnit) {
    var CoordinateTest = {
        test: function() {
            var x = 3;
            var y = 6;

            test("Basic functions", function() {
            	var c = new Coordinate(0,0);
            	equal(c.getX(), 0, "Check x");
            	equal(c.getY(), 0, "Check y");

            	var c = new Coordinate(865,254);
            	equal(c.getX(), 865, "Check x");
            	equal(c.getY(), 254, "Check y");
            	
            	var x3 = 99999999932165499;
            	var y3 = 997896545321999999999;
            	var c = new Coordinate(x3,y3);
            	equal(c.getX(), x3, "Check x:"+x3);
            	equal(c.getY(), y3, "Check y:"+y3);
            	
            	var x4 = "99999999932165499";
            	var y4 = "997896545321999999999";
            	var c = new Coordinate(x4,y4);
            	equal(c.getX(), x4, "Check x:"+x4);
            	equal(c.getY(), y4, "Check y:"+y4);


            });
            test("Negative creational tests", function() {
            	try{
                	var c = new Coordinate();
                	ok(false,"Possible to create a Coordinate with no parameter");
            	} catch( e ){
                	ok(true,"NOT Possible to create a Coordinate with no parameter");            		
            	}

            	try{
                	var c = new Coordinate(a);
                	ok(false,"Possible to create a Coordinate with one parameter");
            	} catch( e ){
                	ok(true,"NOT Possible to create a Coordinate with one parameter");            		
            	}

            });
            test("Invalid parameter tests", function() {
            	var x3 = "abc";
            	var y3 = "xyz";

            	var x3_expected = 0;
            	var y3_expected = 0;

            	var c = new Coordinate(x3,y3);
            	equal(c.getX(), x3_expected, "Check x:"+x3);
            	equal(c.getY(), y3_expected, "Check y:"+y3);            	
            });

        },
    };
    return CoordinateTest;
});