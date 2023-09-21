function calculateFactorial() {
  let num = parseInt(document.getElementById("number").value);
  let result = 1;
  if (num < 0 || !Number.isInteger(num)) {
    document.getElementById("output").textContent = "Factorial is undefined for negative numbers, non-integers, or zero.";
    return;
  }
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  document.getElementById("output").textContent = "Factorial: " + result;
}