// set random color for background of shapes div
setBgColor = document.getElementById("hold-shapes");
function randomBgColor() {
    let rgbColorOne = Math.floor(Math.random() * 256);
    let rgbColorTwo = Math.floor(Math.random() * 256);
    let rgbColorThree = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${rgbColorOne}, ${rgbColorTwo}, ${rgbColorThree})`;
    setBgColor.style.background = bgColor;
    }

    randomBgColor();

class Shape {

}

class Circle {
    constructor(radius) {
    }
}

class Triangle {
    constructor(height) {
        // height, width, base will all be the same
    }
}

class Rectangle {
    constructor(width, height) {
    }
}

class Square {
    constructor(sideLength) {
    }
}
