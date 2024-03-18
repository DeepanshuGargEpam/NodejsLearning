// Without OCP
class Square {
    constructor(side) {
      this.side = side;
    }
  }
  
  class AreaCalculator {
    calculateSquareArea(square) {
      return square.side * square.side;
    }
  }
  
  // With OCP
  class Shape {
    calculateArea() {}
  }
  
  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    calculateArea() {
      return this.side * this.side;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }