const box = document.querySelector(".box");

box.addEventListener("click", function () {
  box.textContent = "Clicked! 🥳";
  box.classList.add("after");
});
