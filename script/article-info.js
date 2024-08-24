const infoContainers = document.querySelectorAll(".right-content__info");

infoContainers.forEach((infoItem) => {
  infoItem.addEventListener("click", () => {
    infoItem.classList.toggle("unexpanded");
  });
});
