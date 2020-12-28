const Point = require("./models/Point");
const Triangle = require("./models/Triangle");
describe("Loại tam giác", () => {
  test("Tam giác vuông", () => {
    const a = new Point(0, 0);
    const b = new Point(0, 3);
    const c = new Point(5, 0);
    const tri = new Triangle(a, b, c);
    const result = tri.classifyTriangle();
    expect(result).toBe("Tam giác vuông");
  });
  test("Tam giác vuông cân", () => {
    const a = new Point(0, 0);
    const b = new Point(5, 0);
    const c = new Point(0, 5);
    const tri = new Triangle(a, b, c);
    const result = tri.classifyTriangle();
    expect(result).toBe("Tam giác vuông cân");
  });
  test("Tam giác đều", () => {
    const a = new Point(4, 0);
    const b = new Point(0, 0);
    const c = new Point(2, Math.sqrt(12));
    const tri = new Triangle(a, b, c);
    const result = tri.classifyTriangle();
    expect(result).toBe("Tam giác đều");
  });
  test("Tam giác cân", () => {
    const a = new Point(3, 5);
    const b = new Point(1, 1);
    const c = new Point(5, 1);
    const tri = new Triangle(a, b, c);
    const result = tri.classifyTriangle();
    expect(result).toBe("Tam giác cân");
  });
  test("Tam giác tù", () => {
    const a = new Point(0, 0);
    const b = new Point(55, 0);
    const c = new Point(-55, 55);
    const tri = new Triangle(a, b, c);
    const result = tri.classifyTriangle();
    expect(result).toBe("Tam giác tù");
  });
  test("Tam giác nhọn", () => {
    const a = new Point(1.5, 0);
    const b = new Point(2.5, 2);
    const c = new Point(3, 0);
    const tri = new Triangle(a, b, c);
    const result = tri.classifyTriangle();
    expect(result).toBe("Tam giác nhọn");
  });
  test("Không phải tam giác", () => {
    const a = new Point(0, 0);
    const b = new Point(5, 0);
    const c = new Point(10, 0);
    const tri = new Triangle(a, b, c);
    const result = tri.classifyTriangle();
    expect(result).toBe(false);
  });
});

describe("Tính chu vi", () => {
  test("Chu vi tam giác vuông", () => {
    const a = new Point(0, 0);
    const b = new Point(0, 3);
    const c = new Point(5, 0);
    const tri = new Triangle(a, b, c);
    const result = tri.perimeter();
    expect(result).toBe(13.830951895);
  });
  test("Chu vi tam giác vuông cân", () => {
    const a = new Point(0, 0);
    const b = new Point(5, 0);
    const c = new Point(0, 5);
    const tri = new Triangle(a, b, c);
    const result = tri.perimeter();
    expect(result).toBe(17.071067812);
  });
  test("Chu vi tam giác đều", () => {
    const a = new Point(4, 0);
    const b = new Point(0, 0);
    const c = new Point(2, Math.sqrt(12));
    const tri = new Triangle(a, b, c);
    const result = tri.perimeter();
    expect(result).toBe(12);
  });
  test("Chu vi tam giác cân", () => {
    const a = new Point(3, 5);
    const b = new Point(1, 1);
    const c = new Point(5, 1);
    const tri = new Triangle(a, b, c);
    const result = tri.perimeter();
    expect(result).toBe(12.94427191);
  });
  test("Chu vi tam giác tù", () => {
    const a = new Point(0, 0);
    const b = new Point(55, 0);
    const c = new Point(-55, 55);
    const tri = new Triangle(a, b, c);
    const result = tri.perimeter();
    expect(result).toBe(255.765484693);
  });
  test("Chu vi tam giác nhọn", () => {
    const a = new Point(1.5, 0);
    const b = new Point(2.5, 2);
    const c = new Point(3, 0);
    const tri = new Triangle(a, b, c);
    const result = tri.perimeter();
    expect(result).toBe(5.79762079);
  });
  test("Chu vi nếu không phải tam giác", () => {
    const a = new Point(0, 0);
    const b = new Point(5, 0);
    const c = new Point(10, 0);
    const tri = new Triangle(a, b, c);
    const result = tri.perimeter();
    expect(result).toBe(-1);
  });
});
