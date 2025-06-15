function cool(paintCallback) {
	paintCallback();
}

function randomColor(){
    const colors = ["red", "green", "blue", "yellow", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
    console.log("Background color changed to: " + randomColor);
}

cool(randomColor);