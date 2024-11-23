let answer = document.getElementById("answer");
let show = document.getElementById("show");
let hide = document.getElementById("hide");
let faq = document.getElementById("faq");

show.onclick = function show() {
  answer.style.transform = "scale(1)";
  answer.style.display = "block"
};

hide.onclick = function hide() {
  answer.style.transform = "scale(0)";
  faq.style.height = "auto";
};
