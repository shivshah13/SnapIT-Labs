// task 1 – function expression to add two strings
const addStrings = function(str1, str2) 
{
  return str1 + str2;
};
console.log(addStrings("Hello, ", "world!"));

// task 2 – function with default parameter
function addWithDefault(num1, num2 = 15) 
{
  return num1 + num2;
}
console.log(addWithDefault(10, 5));    // outputs 15
console.log(addWithDefault(10));       // outputs 25

// task 3 – arrow function version of task 1
const addStringsArrow = (str1, str2) => str1 + str2;
console.log(addStringsArrow("JS ", "Rocks!"));
