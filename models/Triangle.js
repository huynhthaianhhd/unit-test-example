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
    if (a >= b + c || b >= a + c || c >= a + b) return false;
    if (
      a == Math.round(parseFloat(Math.hypot(b, c)) * 1000000000) / 1000000000 ||
      b == Math.round(parseFloat(Math.hypot(a, c)) * 1000000000) / 1000000000 ||
      c == Math.round(parseFloat(Math.hypot(a, b)) * 1000000000) / 1000000000
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
    else return str.concat(" nhọn");
  }
  perimeter() {
    const isTriangle = this.classifyTriangle();
    if (isTriangle) {
      const a = this.pointA.calDistance(this.pointB);
      const b = this.pointB.calDistance(this.pointC);
      const c = this.pointC.calDistance(this.pointA);
      return Math.round(parseFloat(a + b + c) * 1000000000) / 1000000000;
    } else {
      return -1;
    }
  }
};
