
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