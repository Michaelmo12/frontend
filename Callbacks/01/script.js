function showMyName() {
    console.log("My name is Michael");
    document.body.innerHTML += "<p>שלום, אני מיכאל!</p>";
}

function runCallback(callback) {
  callback(); // קריאה לפונקציה שהועברה
}

runCallback(showMyName);
