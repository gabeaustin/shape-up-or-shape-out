const max = 600;
let container = document.getElementById("box-to-hold-shapes");
let addRecBtn = document.getElementById("add-rectangle-btn");
let addSquBtn = document.getElementById("add-square-btn");
let addCirBtn = document.getElementById("add-circle-btn");
let addTriBtn = document.getElementById("add-triangle-btn");
let setBgColor = document.getElementById("box-to-hold-shapes");

// set random color for background of shapes div
function randomBgColor() {
    let rgbColorOne = Math.floor(Math.random() * 256);
    let rgbColorTwo = Math.floor(Math.random() * 256);
    let rgbColorThree = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${rgbColorOne}, ${rgbColorTwo}, ${rgbColorThree})`;
    setBgColor.style.background = bgColor;
    }
    randomBgColor();


class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    draw() {
        if(this.width > max && this.height > max ) {
            return alert("Too large. Try again.");
        } else if (this.width > max) {
            return alert(`Width of ${this.width}px is too large. Try again.`); 
        } else if (this.height > max) {
            return alert(`Height of ${this.height}px is too large. Try again.`);
        }
    };
}

class Circle {
    constructor(radius) {
        this.radius = radius;

    }
}

class Triangle {
    constructor(height) {
        this.height = height;

    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }
}