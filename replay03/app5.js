const circle = {
    radius: 1,
    draw: function () {
    }
};

function createCircle(radius) {
    return {
        radius,
        draw: function () {
        }
    }
}

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
    }
}

const x = {};
x.constructor;

Circle.name;
Circle.length;
Circle.constructor;
Circle.call({}, 1);
Circle.apply({}, [1]);

circle.location = {};
circle['location'] = {};

delete circle.location;

for (let key in circle) console.log(key, circle[key]);

Object.keys(circle);

if ('location' in circle)

function Circle(radius) {
    this.radius = radius;
    let defaultLocation = {};
}

Object.defineProperty(this, 'defaultLocation', {
    get: function () {
        return defaultLocation;
    },
    set: function (value) {
        defaultLocation = value;
    }
});