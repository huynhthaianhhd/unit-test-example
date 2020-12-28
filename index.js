const Triangle = require("./models/Triangle");
const Point = require("./models/Point");
const p1 = new Point(1, 12312);
const p2 = new Point(1.23, 12); 
const p3 = new Point(123123, 1);
//abc
const TriangleTest = new Triangle(p1, p2, p3);
console.log("Cal: ", p1.calDistance(p2));
console.log("Phân Loại: ", TriangleTest.classifyTriangle());
console.log("Chu vi", TriangleTest.perimeter());