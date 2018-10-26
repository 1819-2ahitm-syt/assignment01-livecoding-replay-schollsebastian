//OLS
const circleOLS = {
  radius: 1,
  location: {
      x: 1,
      y: 2
  },
  draw: function () {
      console.log('draw');
  }
};
circleOLS.draw();

//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw : function () {
            console.log('draw');
        }
    };
}
const circleFactory = createCircle(1);
circleFactory.draw();

//Constructor Function
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}
const circleConstructor = new Circle(1);