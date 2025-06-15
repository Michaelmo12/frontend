function amazing(callback) {
  const num = callback(42, 128, 37, 81, 66);
  console.log("Num: " + num);
}

function t(a, b, c, d, e) {
  let numbers = [a, b, c, d, e];
  let randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
}

amazing(t);

// The above code defines a function `amazing` that takes a callback function as an argument.
// It then calls `amazing` with `t` as the callback, which will return a random number from the provided arguments.
