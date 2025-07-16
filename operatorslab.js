// task 1 – math with PEMDAS to get 138 and 168
function calculateValues() {
  let result1 = 10 + (32 * 12) / 3;   // 138
  let result2 = (10 + 32) * (12 / 3); // 168

  console.log("Result 1:", result1);
  console.log("Result 2:", result2);
}
calculateValues();

// task 2 – using assignment operators
function useAssignmentOps(a, b) {
  let x = a;
  let y = a;
  let z = a;

  x += b;
  y *= b;
  z %= b;

  console.log("a += b →", x);
  console.log("a *= b →", y);
  console.log("a %= b →", z);
}
useAssignmentOps(10, 3);

// task 3 – using comparison operators
function compareValues(val1, val2) {
  const isEqualLoose = val1 == val2;
  const isNotEqual = val1 != val2;
  const isEqualStrict = val1 === val2;

  console.log(`val1 == val2 → ${isEqualLoose}`);
  console.log(`val1 != val2 → ${isNotEqual}`);
  console.log(`val1 === val2 → ${isEqualStrict}`);
}
compareValues(5, "5");
