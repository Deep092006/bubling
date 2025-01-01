let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
div.addEventListener("click", function (e) {
  e.stopPropagation();// stop event bulbing when clicking parent not reacts
    console.log("div pressed");
});
ul.addEventListener("click", function (e) {
    e.stopPropagation();// stop event bulbing when clicking parent not reacts
  console.log("ul pressed");
});
li.addEventListener("click", function (e) {
    e.stopPropagation();// stop event bulbing when clicking parent not reacts
  console.log("li pressed");

});
