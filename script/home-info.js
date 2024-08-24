const infoContainers = document.querySelectorAll(".right-content__info");
let timeoutId;
let userClicked = false;
let animationIndex = 0;

infoContainers.forEach((infoItem) => {
  infoItem.addEventListener("click", () => {
    infoItem.classList.toggle("unexpanded");
    userClicked = true;
    clearTimeout(timeoutId);

    setTimeout(() => {
      userClicked = false;
      animationIndex = 0;
      animateSequentially();
    }, 3000);
  });
});

function animateSequentially() {
  animationIndex >= infoContainers.length
    ? (animationIndex = 0)
    : animationIndex;
  const currentElement = infoContainers[animationIndex];
  currentElement.classList.add("unexpanded");

  timeoutId = setTimeout(() => {
    currentElement.classList.remove("unexpanded");

    if (!userClicked) {
      animationIndex++;
      setTimeout(() => {
        animateSequentially();
      }, 500);
    }
  }, 3000);
}

animateSequentially();
