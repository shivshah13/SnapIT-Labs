// task 1 – array of ice cream flavors + loop
let iceCreamFlavors = [
  "Vanilla",
  "Chocolate",
  "Strawberry",
  "Mint Chip",
  "Cookies & Cream",
  "Rocky Road",
  "Butter Pecan",
  "Coffee",
  "Pistachio",
  "Mango"
];

function printFlavors() {
  for (let i = 0; i < iceCreamFlavors.length; i++) {
    console.log(iceCreamFlavors[i]);
  }
}
printFlavors();

// task 2 – join method with ‘ & ’
function joinFlavors() {
  let combined = iceCreamFlavors.join(" & ");
  console.log(combined);
}
joinFlavors();
