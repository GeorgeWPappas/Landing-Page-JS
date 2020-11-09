// Script for randomizing and displaying dice.

// Generates a random integer from 1 to 6.
function getRandomNumber() {
    ranNum = Math.floor(Math.random() * 6) + 1;
}

// Changes image for dice 1.
function changeImage1() {
    var img = document.getElementById("image1");
    getRandomNumber()
    img.src="/img/" + "Dice_" + ranNum + ".png";
}

// Changes image for dice 2.
function changeImage2() {
    var img = document.getElementById("image2");
    getRandomNumber()
    img.src="/img/" + "Dice_" + ranNum + ".png";
}

// Changes image for dice 3.
function changeImage3() {
    var img = document.getElementById("image3");
    getRandomNumber()
    img.src="/img/" + "Dice_" + ranNum + ".png";
}

// Changes image for dice 4.
function changeImage4() {
    var img = document.getElementById("image4");
    getRandomNumber()
    img.src="/img/" + "Dice_" + ranNum + ".png";
}

// Changes image for dice 5.
function changeImage5() {
    var img = document.getElementById("image5");
    getRandomNumber()
    img.src="/img/" + "Dice_" + ranNum + ".png";
}

// Changes image for dice 6.
function changeImage6() {
    var img = document.getElementById("image6");
    getRandomNumber()
    img.src="/img/" + "Dice_" + ranNum + ".png";
}
