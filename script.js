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
    constructor() {

    }
}

class Circle {
    constructor() {

    }
}

class Triangle {
    constructor() {

    }
}

class Rectangle {
    constructor() {

    }
}

class Square {
    constructor() {

    }
}