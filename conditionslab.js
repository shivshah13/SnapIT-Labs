// task 1 – compare two parameters with ==
function compareValues(val1, val2) {
  if (val1 == val2) {
    console.log(`${val1} == ${val2} → They are equal`);
  } else {
    console.log(`${val1} == ${val2} → They are NOT equal`);
  }
}

// test with numbers
compareValues(5, 5);      // equal
compareValues(5, "5");    // equal (== allows type coercion)
compareValues(5, 6);      // not equal

// test with strings
compareValues("hello", "hello"); // equal
compareValues("hello", "world"); // not equal

// task 2 – switch statement for grade descriptions
function gradeDescription(grade) {
  switch (grade) {
    case "E":
      console.log("Excellent");
      break;
    case "V":
      console.log("Very Good");
      break;
    case "G":
      console.log("Good");
      break;
    case "A":
      console.log("Average");
      break;
    case "F":
      console.log("Fail");
      break;
    default:
      console.log("Not a valid grade");
  }
}

// test with different grades
gradeDescription("E"); // Excellent
gradeDescription("V"); // Very Good
gradeDescription("Z"); // Not a valid grade
