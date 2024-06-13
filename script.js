prompt(
  "Please enter a list of comma-separated froyo flavors:",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

const froyoFlavors = {
  vanilla: 3,
  strawberry: 1,
  coffee: 2,
};

for(const key in froyoFlavors) {
    console.log(key)
};

for(const key in froyoFlavors) {
    console.log(froyoFlavors[key])
}

console.log(Object.keys(froyoFlavors));
console.log(Object.values(froyoFlavors));

for(let i = 0; i < froyoFlavors.length; i++) {
  console.log(froyoFlavors(i));
}

console.table(froyoFlavors)