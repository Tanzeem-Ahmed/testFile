class Shape {
  constructor() {}

  area() {
    return 0;
  }

  perimeter() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(r) {
    this.radius = r;
    super();
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  perimeter(){
    return Math.PI * this.radius * 2;
  }
}
