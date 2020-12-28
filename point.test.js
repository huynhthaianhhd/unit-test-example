const Point = require("./models/Point");
describe("Input không hợp lệ", () => {
  test("x: chữ, y: số", () => {
    expect(() => {
      new Point("z", 5);
    }).toThrowError("Input không hợp lệ");
  });

  test("x: số, y: chữ", () => {
    expect(() => {
      new Point(5, "z");
    }).toThrowError("Input không hợp lệ");
  });
});

describe("Input hợp lệ", () => {
  test("x, y: số nguyên dương", () => {
    const point = new Point(5, 5);
    expect(point instanceof Point).toBe(true);
  });

  test("x, y: số nguyên âm", () => {
    const point = new Point(-5, -5);
    expect(point instanceof Point).toBe(true);
  });

  test("x: số nguyên dương, y: số nguyên âm", () => {
    const point = new Point(5, -5);
    expect(point instanceof Point).toBe(true);
  });

  test("x: số nguyên âm, y: số nguyên dương", () => {
    const point = new Point(-5, 5);
    expect(point instanceof Point).toBe(true);
  });

  test("x,y: số thập phân dương", () => {
    const point = new Point(5.5, 5.5);
    expect(point instanceof Point).toBe(true);
  });

  test("x,y đều là số thập phân âm", () => {
    const point = new Point(-5.5, -5.5);
    expect(point instanceof Point).toBe(true);
  });

  test("x: số thập phân dương, y: số thập phân âm", () => {
    const point = new Point(5.5, -5.5);
    expect(point instanceof Point).toBe(true);
  });

  test("x: số thập phân âm, y: số thập phân dương", () => {
    const point = new Point(-2.12, 1.42);
    expect(point instanceof Point).toBe(true);
  });

  test("x: 0, y: 0", () => {
    const point = new Point(0, 0);
    expect(point instanceof Point).toBe(true);
  });
  test("x: 0, y: any", () => {
    const point = new Point(0, 5);
    expect(point instanceof Point).toBe(true);
  });

  test("x: any, y: 0", () => {
    const point = new Point(5, 0);
    expect(point instanceof Point).toBe(true);
  });
});