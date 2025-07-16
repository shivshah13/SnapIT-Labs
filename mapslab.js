// task 1 – create a map of colors and return it
function getColorMap() {
  const colors = new Map();
  colors.set("red", "#FF0000");
  colors.set("green", "#00FF00");
  colors.set("blue", "#0000FF");
  colors.set("yellow", "#FFFF00");
  colors.set("purple", "#800080");
  colors.set("orange", "#FFA500");

  return colors;
}

// task 2 – function to log key-value pairs
function logColor(value, key) {
  console.log(`${key}: ${value}`);
}

// second function to run forEach on the map
function showAllColors() {
  const colorMap = getColorMap();
  colorMap.forEach(logColor);
}

// run it
showAllColors();
