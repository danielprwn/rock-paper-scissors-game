var stone = document.getElementById("stone"),
  paper = document.getElementById("paper"),
  scissors = document.getElementById("scissors"),
  secim1 = document.getElementById("secim1"),
  secim2 = document.getElementById("secim2"),
  score1 = document.getElementById("score1"),
  score2 = document.getElementById("score2"),
  leftPhoto = document.getElementById("leftPhoto");
var player1 = "";
var player2 = "";
var deger = ["stone", "paper", "scissors"];
function skor() {
  score1.innerHTML = player1.length;
  score2.innerHTML = player2.length;
}

function right(a) {
  rightPhoto.style.background = "url(" + a + ")";
  rightPhoto.style.backgroundSize = "cover";
}

stone.onclick = function () {
  x = Math.floor(Math.random() * 3);
  secim1.innerHTML = "Stone";
  leftPhoto.style.background = "url(stone.png)";
  leftPhoto.style.backgroundSize = "cover";
  if (x == 0) {
    secim2.innerHTML = "Stone";
    right("stone.png");
  } else if (x == 1) {
    player2 += "1";
    secim2.innerHTML = "Paper";
    right("paper.png");
  } else if (x == 2) {
    secim2.innerHTML = "Scissors";
    player1 += "1";
    right("scissors.png");
  }
  skor();
};

paper.onclick = function () {
  x = Math.floor(Math.random() * 3);
  secim1.innerHTML = "Paper";
  leftPhoto.style.background = "url(paper.png)";
  leftPhoto.style.backgroundSize = "cover";
  if (x == 0) {
    secim2.innerHTML = "Stone";
    player1 += "1";
    right("stone.png");
  } else if (x == 1) {
    secim2.innerHTML = "Paper";
    right("paper.png");
  } else if (x == 2) {
    secim2.innerHTML = "Scissors";
    player2 += 1;
    right("scissors.png");
  }
  skor();
};

scissors.onclick = function () {
  x = Math.floor(Math.random() * 3);
  secim1.innerHTML = "Scissors";
  leftPhoto.style.background = "url(scissors.png)";
  leftPhoto.style.backgroundSize = "cover";
  if (x == 0) {
    secim2.innerHTML = "Stone";
    player2 += "1";
    right("stone.png");
  } else if (x == 1) {
    secim2.innerHTML = "Paper";
    player1 += "1";
    right("paper.png");
  } else if (x == 2) {
    secim2.innerHTML = "Scissors";
    right("scissors.png");
  }
  skor();
};
