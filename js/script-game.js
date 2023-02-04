function init() {}

let cardImgs = [
  "img/mandala.png",
  "img/cake85.png",
  "img/microphone (1).png",
  "img/musical-notes.png",
  "img/flower.jpg",
  "img/yoplay-logo.jpg",
  "img/mandala.png",
  "img/cake85.png",
  "img/microphone (1).png",
  "img/musical-notes.png",
  "img/flower.jpg",
  "img/yoplay-logo.jpg",
];

function randomImg() {
  for (let i = 0; i < 10; i++) {
    const rnd1 = Math.floor(Math.random() * 10);
    const rnd2 = Math.floor(Math.random() * 10);
    const temp = cardImgs[rnd1];
    cardImgs[rnd1] = cardImgs[rnd2];
    cardImgs[rnd2] = temp;
  }
  console.log(cardImgs)

  for (i = 0; i < cardImgs.length; i++) {
    document.card[i].src = cardImgs[i];
  }
}
window.onload = randomImg();

const gameCards = document.querySelectorAll(".game-card-wrap");
gameCards.forEach(function (gameCard) {
  gameCard.addEventListener("click", function (e) {
    gameCard.classList.toggle("active");
    let classActive = document.querySelectorAll(".active");
    if (classActive.length === 2) {
      let srcImg1 = classActive[0].getElementsByTagName("img")[0].currentSrc;
      let srcImg2 = classActive[1].getElementsByTagName("img")[0].currentSrc;
      setTimeout(function () {
        if (srcImg1 === srcImg2) {
          classActive[0].classList.add("done");
          classActive[1].classList.add("done");
          let doneCards = document.querySelectorAll(".done");
          if (doneCards.length === 12) {
            let winPop = document.querySelector(".popup-wrap");
            setTimeout(function () {
              winPop.style.display = "block";
            }, 500);
          }
        }
        classActive[0].classList.remove("active");
        classActive[1].classList.remove("active");
      }, 1000);
    }
  });
});
