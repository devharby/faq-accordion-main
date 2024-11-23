let answer = document.getElementById("answer");
let show = document.getElementById("show");
let hide = document.getElementById("hide");

show.onclick = function show() {
  answer.style.display = "block";
};

hide.onclick = function hide() {
  answer.style.display = "none";
};