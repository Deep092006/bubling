let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
div.addEventListener("click", function (e) {
  
    console.log("div pressed");
});
ul.addEventListener("click", function (e) {
  console.log("ul pressed");
});
li.addEventListener("click", function (e) {
  console.log("li pressed");
});
