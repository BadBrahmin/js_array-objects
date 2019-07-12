var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function() {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function() {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function() {
    console.log("Hi there!");
  }
};

// 1

var penguins = [gunter, ramon, fred];

// 2

console.log(penguins[0]);

// 3
var secondPenguin = penguins[1];

// 4
console.log(penguins[2]);

// 5
var myPenguin = {
  name: "Whiteblack",
  origin: "Whiteblack the Penguin Sees the World",
  author: "H. A. Rey and Margret Rey"
};

penguins.push(myPenguin);

// 6
console.log(penguins["length"]);

// 7
penguins[0].canFly = true;

// 8

penguins.sayHello = () => {
  console.log("Hello, I'm a penguin and my name is " + penguins.name + "!");
};

penguins[0].sayHello();

// 9

for (var key in penguins) {
  console.log(penguins[key].name);
}

// 10

for (var key in penguins) {
  console.log(penguins[key].sayHello());
}

// 11
for (var key in penguins) {
  console.log((penguins[key].numberOfFeet = 2));
}

// 12
for (var key in penguins) {
  if (penguins[key].canFly == true)
    console.log(penguins[key].name + " can fly");
}