// task 1 – while loop from 5 to 25
function showWhileLoop() {
  let num = 5;
  while (num <= 25) {
    console.log(num);
    num++; // update step
  }
}
showWhileLoop();

// task 2 – for loop for numbers divisible by 3 (0 to 30)
function showDivisibleByThree() {
  for (let i = 0; i <= 30; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}
showDivisibleByThree();
