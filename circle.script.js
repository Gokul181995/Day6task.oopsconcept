class Circle {
  constructor(radius = 1.0, color = "Red") {
    this._radius = radius;
    this._color = color;
  }

  getRadius() {
    return this._radius;
  }

  getColor() {
    return this._color;
  }

  setColor(color) {
    this._color = color;
  }

  toString() {
    return `Circle [Radius: ${this._radius}, Color: ${this._color}]`;
  }

  getArea() {
    return Math.PI * this._radius ** 2;
  }

  getCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

const myCircle = new Circle();
console.log(myCircle.toString());

const customCircle = new Circle(2.5, "Blue");
console.log(customCircle.toString());

console.log(`Area: ${customCircle.getArea()}`);
console.log(`Circumference: ${customCircle.getCircumference()}`);

customCircle.setColor("Green");
console.log(customCircle.toString());
