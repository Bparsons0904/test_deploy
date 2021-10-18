const left = document.getElementById("left");
const right = document.getElementById("right");

left.addEventListener("click", (event) => {
  alert("I am the left box!");
});
right.addEventListener("click", (event) => {
  alert("I am the right box!");
});
