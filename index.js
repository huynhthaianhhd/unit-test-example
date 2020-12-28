const Triangle = require("./models/Triangle");
const Point = require("./models/Point");
const p1 = new Point(0, 0);
const p2 = new Point(0, 1);
const p3 = new Point(1, 0);
const TriangleTest = new Triangle(p1, p2, p3);
console.log("Phân Loại: ", TriangleTest.classifyTriangle());
console.log("Chu vi", TriangleTest.perimeter());
