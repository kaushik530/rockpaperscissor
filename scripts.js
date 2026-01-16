/* ===============================
   CONFIG / CONSTANTS
================================ */

// total rounds to play
let count = 5;

// score tracking
let userscore = 0;
let botscore = 0;

// choice mapping
let userchoice;
let botchoice;
let Max = 3;
let Min = 1;
let arr = ["draw", "rock", "paper", "scissor"];

// round tracking
let rounds = 0;
let pick = "";

// game activity flag
let active = false;


/* ===============================
   DOM ELEMENTS
================================ */

// score displays
let usrscr = document.querySelector(".usrscr");
let botscr = document.querySelector(".botscr");

// bot image
let botimg = document.querySelector(".botimg");

// bot image mapping
const botimages = {
  0: "images/bot.png",
  1: "images/rock.jpg",
  2: "images/paper.png",
  3: "images/scissor.png"
};

// result text
let result = document.querySelector("#result");

// buttons
let userbuttons = document.querySelectorAll(".userbutton");
let start = document.querySelector(".start");
let startimg = document.querySelector(".startimage");


/* ===============================
   INITIAL STATE
================================ */

// disable user buttons on load
userbuttons.forEach(btn => btn.disabled = true);


/* ===============================
   START BUTTON LOGIC
================================ */

start.addEventListener("click", () => {
  // enable gameplay
  userbuttons.forEach(btn => btn.disabled = false);
  active = true;

  // reset UI
  result.textContent = "";
  startimg.src = "images/vs.png";

  // reset game state
  rounds = 0;
  userscore = 0;
  botscore = 0;

  // reset visuals
  botimg.src = botimages[0];
  usrscr.textContent = "0";
  botscr.textContent = "0";
});


/* ===============================
   BUTTON TOGGLER
================================ */

function toggleButtons(state) {
  userbuttons.forEach(btn => btn.disabled = state);
}


/* ===============================
   USER BUTTON HANDLERS
================================ */

userbuttons.forEach(btn => {
  btn.addEventListener("click", (e) => {

    // guard against inactive state
    if (!active) {
      console.log("inactive");
      return;
    }

    // store user pick
    pick = e.currentTarget.value;

    // play one round
    playround();
  });
});


/* ===============================
   CORE GAME LOGIC
================================ */

function playround() {

  // map string choice → number
  if (pick === "rock") userchoice = 1;
  else if (pick === "paper") userchoice = 2;
  else if (pick === "scissor") userchoice = 3;
  else {
    alert("invalid choice bruh choose rock, paper or scissor");
    return;
  }

  // generate bot choice
  botchoice = Math.floor(Math.random() * (Max - Min + 1) + Min);

  // update bot image
  botimg.src = botimages[botchoice];

  // evaluate round result
  if (userchoice === (botchoice % 3) + 1) {
    userscore++;
    usrscr.textContent = `${userscore}`;
    result.textContent =
      `user chose ${arr[userchoice]} and bot chose ${arr[botchoice]}, user wins this round`;
  }
  else if (userchoice === botchoice) {
    result.textContent =
      `Both chose the same thing so ${arr[0]}`;
  }
  else {
    botscore++;
    botscr.textContent = `${botscore}`;
    result.textContent =
      `user chose ${arr[userchoice]} and bot chose ${arr[botchoice]}, bot wins this round`;
  }

  // increment completed rounds
  rounds++;

  // check for game end
  if (rounds === 5) {
    toggleButtons(true);
    active = false;

    // final result
    if (userscore > botscore) {
      result.textContent =
        `user score:${userscore}, bot score:${botscore}, user wins.`;
    }
    else if (userscore < botscore) {
      result.textContent =
        `user score:${userscore}, bot score:${botscore}, bot wins`;
    }
    else {
      result.textContent = "Draw!!!!, yall bot sucker bruh";
    }

    // reset start button visual
    startimg.src = "images/start.png";
  }
}
