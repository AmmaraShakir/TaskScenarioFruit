// Setting up variables
const fruits = ["apple", "orange", "banana", "grape", "mango"];
const budget = 50;
let totalCost = 0;

// Function to calculate fruit price
function getFruitPrice(fruit) {
  switch (fruit) {
    case "apple":
      return 1.0;
    case "orange":
      return 0.5;
    case "banana":
      return 0.8;
    case "grape":
      return 2.0;
    case "mango":
      return 1.5;
    default:
      return 0;
  }
}

// Calculating total cost
for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  const price = getFruitPrice(fruit);
  
  if (price > 0) {
    let discountedPrice = price;
    
    if (fruit === "apple") {
      discountedPrice *= 0.9; // 10% discount for apples
    } else if (fruit === "banana") {
      discountedPrice *= 0.8; // 20% discount for bananas
    }
    
    totalCost += discountedPrice;
  }
}

// Adjusting fruit list to fit the budget
while (totalCost > budget && fruits.length > 0) {
  const lastFruit = fruits.pop();
  const price = getFruitPrice(lastFruit);
  
  if (price > 0) {
    if (lastFruit === "apple") {
      totalCost -= price * 0.9; // Adjusted discount for removed apple
    } else if (lastFruit === "banana") {
      totalCost -= price * 0.8; // Adjusted discount for removed banana
    } else {
      totalCost -= price;
    }
  }
}

// Final decision
if (totalCost <= budget && fruits.length > 0) {
  console.log("You can buy the following fruits within your budget:");
  console.log(fruits);
  console.log("Total cost: $" + totalCost.toFixed(2));
} else if (fruits.length === 0) {
  console.log("You cannot buy any fruits within your budget.");
} else {
  console.log("You cannot buy the fruits within your available budget.");
}