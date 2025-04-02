
const video = document.querySelector("#VideoHero");

document.addEventListener("keydown", function (event) {
  console.log(event)
  if (event.code === "Space") {
    // console.log("Space key pressed");
    // console.log(video.onpl);
    if (video.paused) {
      video.play();
    }
    else {
      video.pause();
    }
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const navLinks = document.querySelector(".nav-links");

  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});