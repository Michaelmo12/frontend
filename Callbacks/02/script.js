function cool(callback) {
	callback();
}

function randomNumber(){
    let randomNumber = Math.floor(Math.random()*1000);
    console.log(randomNumber);
    document.getElementById("selectedNum").innerText = randomNumber;
    
}

cool(randomNumber);