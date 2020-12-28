const Point = require("./Point");

module.exports = class Triangle {
  constructor(pointA, pointB, pointC) {
    this.pointA = pointA;
    this.pointB = pointB;
    this.pointC = pointC;
  }
  classifyTriangle() {
    let str = "Tam giác";
    const a = this.pointA.calDistance(this.pointB);
    const b = this.pointB.calDistance(this.pointC);
    const c = this.pointC.calDistance(this.pointA);
    console.log(a, b, c);
    if (a < 0 || b < 0 || c < 0) return false;
    if (a > b + c && b > a + c && c > a + b) return false;
    if (
      a == Math.hypot(b, c) ||
      b == Math.hypot(a, c) ||
      c == Math.hypot(a, b)
    ) {
      str = str.concat(" vuông");
      if (a == b || a == c || b == c) {
        str = str.concat(" cân");
      }
      return str;
    } else if (a == b && b == c) return str.concat(" đều");
    else if (a == b || a == c || b == c) return str.concat(" cân");
    else if (
      a * a > b * b + c * c ||
      b * b > a * a + c * c ||
      c * c > a * a + b * b
    )
      return str.concat(" tù");
    else str.concat(" nhọn");
  }
  perimeter() {
    const isTriangle = this.classifyTriangle();
    if (isTriangle) {
      const a = this.pointA.calDistance(this.pointB);
      const b = this.pointB.calDistance(this.pointC);
      const c = this.pointC.calDistance(this.pointA);
      return a + b + c;
    } else {
      return -1;
    }
  }
};
