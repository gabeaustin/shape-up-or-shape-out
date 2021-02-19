const max = 600;
// Set Random Background Color for main container
let setBgColor = document.getElementById("box-to-hold-shapes");
let container = document.getElementById("box-to-hold-shapes");

// Input Boxes
let rectangleHeight = document.getElementById("rectangle-height");
let rectangleWidth = document.getElementById("rectangle-width");
let squareSideLength = document.getElementById("square-side-length");
let circleRadius = document.getElementById("circle-radius");
let triangleHeight = document.getElementById("triangle-height");

// Submit Buttons
let addRecBtn = document.getElementById("add-rectangle-btn");
let addSquBtn = document.getElementById("add-square-btn");
let addCirBtn = document.getElementById("add-circle-btn");
let addTriBtn = document.getElementById("add-triangle-btn");

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
        };
        
        let xWidth = Math.floor(Math.random() * (max - this.width));
        let yHeight = Math.floor(Math.random() * (max - this.height));
        this.div = document.getElementById("div");
        this.div.classList.add(this.cssClass);
        this.div.style.left = `${xWidth}px`;
        this.div.style.top = `${yWidth}px`;
        this.div.style.width = `${this.width}px`;
        this.div.style.height = `${this.height}px`;
        container.appendChild(this.div);
    };
    describe() {
        class Circle extends Shape {
            constructor(radius) {
                super(radius, radius);
                // this.radius = radius;
                this.cssClass = "shape-circles";
                this.draw();
            }
        }

        class Triangle extends Shape {
            constructor(height) {
                super(height, height);
                this.cssClass = "shape-triangles";
                this.div.style.width = "0";
                this.div.style.height = "0";
                this.div.style.borderBottomWidth = `${height}px`;
                this.div.style.borderRightWidth = `${height}px`;
                this.draw();
            }
        }

        class Rectangle extends Shape {
            constructor(width, height) {
                super(height, width);
                this.cssClass = "shape-rectangles";
                this.draw();
            }
        }

        class Square extends Shape {
            constructor(sideLength) {
                super(sideLength, sideLength);
                this.cssClass = "shape-squares";
                this.draw();
            }
        }
    }
}