module.exports = class Point {
  constructor(x, y) {
    if (isNaN(x) || isNaN(y)) throw Error("Input không hợp lệ");
    this.x = x;
    this.y = y;
  }
  calDistance(b) {
    const dx = b.x - this.x;
    const dy = b.y - this.y;
    return Math.hypot(dx, dy);
  }
};
