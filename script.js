let container = document.getElementById("hold-shapes");
let addRecBtn = document.getElementById("add-rec-btn");
let addSquBtn = document.getElementById("add-squ-btn");
let addCirBtn = document.getElementById("add-cir-btn");
let addTriBtn = document.getElementById("add-tri-btn");
let setBgColor = document.getElementById("hold-shapes");
let cirRadiusVal = document.getElementById("cir-radius").value;

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
    constructor() {

    }
}

class Circle {
    constructor(cirRadius) {
        this.cirRadius = cirRadius;
        this.cirDiv = document.createElement("div");
        this.cirDiv.classList.add("newCircle");
        container.appendChild(this.cirDiv);
    }
}

class Triangle {
    constructor(triHeight) {
        // height, width, base will all be the same
        this.triHeight = triHeight;
        this.triHeight = document.createElement("div");
        this.triHeight.classList.add("newTriangle");
    }
}

class Rectangle {
    constructor(recWidth, recHeight) {
        this.recWidth = recWidth;
        this.recHeight = recHeight;
    }
}

class Square {
    constructor(sqSideLength) {
        this.sqSideLength = sqSideLength;
        this.sqSideLength = document.createElement("div");
        this.sqSideLength.classList.add("newSquare");
    }
}
