const usersOrder = prompt(
  "Please enter your desired flavors, separated by commas",
  "vanilla,vanilla,vanilla,strawberry,strawberry,coffee,coffee"
);

console.log(usersOrder);

const ordersArr = usersOrder.split(",");
console.log(ordersArr);

const ordersCondensed = {};

for (let i = 0; i < ordersArr.length; i++) {
  if (ordersCondensed[ordersArr[i]]) {
    ordersCondensed[ordersArr[i]] += 1;
  } else {
    ordersCondensed[ordersArr[i]] = 1;
  }
}

console.table(ordersCondensed);