document.getElementById("start").addEventListener("click", () => {
  document.querySelector(".m").style.display = "block";
  document.getElementById("start").style.display = "none";
  document.getElementById("b2").style.display = "flex";
});
let st = document.getElementById("stone"); // STONE
let pa = document.getElementById("paper"); //PAPER
let sc = document.getElementById("scissor"); //SCISSOR
//=============COMPUTER OPTION============================
let st2 = document.getElementById("stone2"); // STONE
let pa2 = document.getElementById("paper2"); //PAPER
let sc2 = document.getElementById("scissor2"); //SCISSOR
let option = ["st", "pa", "sc"];
//========================================================
let check = 0;
let count = 0;
let selected;
let computeroption, c;
let playerCount = 0,
  computerCount = 0;
//-----------GAME SOUNDS----------------
let a = new Audio("sound/win.mp3");
let b = new Audio("sound/lose.mp3");
let tie = new Audio("sound/tie.mp3");
let win = new Audio("sound/finalWin.mp3");
let lose = new Audio("sound/finallose.mp3");
//-----------GAME SOUNDS----------------

st.addEventListener("click", () => {
  if (count < 4) {
    selected = "st";
    st.style.color = "red";
    count++;
    check = 1;
  }
});
pa.addEventListener("click", () => {
  if (count < 3) {
    selected = "pa";
    pa.style.color = "red";
    count++;
    check = 1;
  }
});
sc.addEventListener("click", () => {
  if (count < 3) {
    selected = "sc";
    sc.style.color = "red";
    count++;
    check = 1;
  }
});
let music;
setInterval(() => {
  if (count < 4 && check == 1) {
    c = Math.floor(Math.random() * 3);
    computeroption = option[c];
    if (
      (selected == "st" && computeroption == "sc") ||
      (selected == "pa" && computeroption == "st") ||
      (selected == "sc" && computeroption == "pa")
    ) {
      (document.getElementById("outcome").style.color = "blue"),
        (document.getElementById("outcome").innerText = "Win");
      playerCount++;
      (a.currentTime = 0), a.play();
      document.getElementById("us").innerText = playerCount;
    } else if (
      (selected == "st" && computeroption == "pa") ||
      (selected == "pa" && computeroption == "sc") ||
      (selected == "sc" && computeroption == "st")
    ) {
      (document.getElementById("outcome").style.color = "red"),
        (document.getElementById("outcome").innerText = "lose");
      computerCount++;
      (b.currentTime = 0), b.play();
      document.getElementById("co").innerText = computerCount;
    } else {
      (document.getElementById("outcome").style.color = "black"),
        (document.getElementById("outcome").innerText = "Tie");
      tie.play();
      --count;
    }
    switch (computeroption) {
      case "sc":
        sc2.style.color = "red";
        break;
        case "st":
          st2.style.color = "red";
          break;
          case "pa":
        pa2.style.color = "red";
        break;
      default:
        break;
    }
    check = 0;
    setTimeout(() => {
      document.getElementById("outcome").style.color = "black";
      let allOptions = document.querySelectorAll(".c");
      for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].style.color = "black";
      }
      document.getElementById("outcome").innerText = "--";
    }, 300);
  }
}, 1);
let finalResult;
setInterval(() => {
  if (count >= 3) {
    playerCount > computerCount
      ? (finalResult = "You won")
      : (finalResult = "You Lost");
    document.querySelector(".m").style.display = "none";
    document.querySelector("#b2").style.display = "none";
    document.getElementById("r").style.display = "inline";
    document.getElementById("result").innerText = finalResult;
    if (finalResult == "You won") {
      document.getElementById("result").style.color = "blue";
      win.play();
    } else {
      document.getElementById("result").style.color = "red";
      lose.play();
    }
  }
}, 500);
document.getElementById("playagain").addEventListener("click", () => {
  check = count = playerCount = computerCount = 0;
  document.querySelector(".m").style.display = "block";
  document.querySelector("#b2").style.display = "flex";
  document.getElementById("us").innerText = playerCount;
  document.getElementById("co").innerText = computerCount;
  document.getElementById("r").style.display = "none";
  win.pause();
  lose.pause();
  win.currentTime = 0;
  lose.currentTime = 0;
});
