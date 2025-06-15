function nice(callback) {
	callback(42);
}

function showNumber(num) {
    document.getElementById("selectedNum").innerText = num;
    if (num > 1000) {
        document.getElementById("selectedNum").style.color = "blue";
    } else {
        document.getElementById("selectedNum").style.color = "red";
    }
}
nice(showNumber);
// The above code defines a function `nice` that takes a callback function as an argument.d
// It then calls `nice` with `showNumber` as the callback, which will display the number 42.