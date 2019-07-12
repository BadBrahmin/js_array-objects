//1
var outfitobject = {
  hat: "baseballcap",
  shirt: "hawaiian shirt",
  pants: "cargo shorts",
  shoes: "flip-flops"
};

penguins.outfit = outfitobject;

//2
var penguinHatType = penguins.outfit["hat"];

//3
outfitobject.watch = "pocket watch";

//4
penguins.outfit.hat = "top hat";

//5
delete penguins.outfit["pants"];

//6
for (var key in outfitobject) console.log(`${key} : ${outfitobject[key]}`);
