module.exports = class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  calDistance(b) {
    const dx = b.x - this.x;
    const dy = b.y - this.y;
    const distance = Math.hypot(dx, dy);
    return Math.round(parseFloat(distance) * 1000000000) / 1000000000;
  }
};
