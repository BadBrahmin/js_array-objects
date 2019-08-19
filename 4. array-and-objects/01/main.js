var myPenguin = {
  name: "Whiteblack",
  origin: "Whiteblack the Penguin Sees the World",
  author: "H. A. Rey and Margret Rey"
};

// 1

myPenguin.favoriteFoods = ["biscuits", "apples", "cake"];

// 2

console.log(myPenguin.favoriteFoods[1]);

// 3

var firstFavFood = myPenguin.favoriteFoods[0];

// 4

myPenguin.favoriteFoods.push("roti");

// 5

console.log(myPenguin["favoriteFoods"].length);

// 6

myPenguin.favoriteFoods[4] = "pineapple";

// 7

var lastFavFood = [myPenguin["favoriteFoods"].length - 1];
console.log(myPenguin.favoriteFoods[lastFavFood]);

// 8

for (i = 0; i < 5; i++) {
  console.log(myPenguin["favoriteFoods"][i]);
}


for (var key in myPenguin.favoriteFoods) {
  console.log(myPenguin.favoriteFoods[key]);
}
