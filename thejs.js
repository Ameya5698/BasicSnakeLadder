// document.querySelector(".thedice").;

let displayDice = function () {
  let num = Math.floor(Math.random() * 6) + 1;
  //   console.log(num);
  document.querySelector(".thedice").setAttribute("src", `${num}.png`);
};

// console.log(document.querySelector(".roller"));
let theCurrentPosition = 0;
const ladders = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  51: 67,
  71: 91,
  80: 100,
};
const snakes = {
  17: 7,
  54: 34,
  62: 19,
  64: 60,
  87: 24,
  95: 75,
  93: 73,
  98: 79,
};

function displayCurrentloc() {
  let tempString = `The Current Position is ${theCurrentPosition} `;
  document.querySelector(".displayer").textContent = tempString;
}

function displayMessage(pos, ladderorsnake) {
  let tempString = `You were at ${pos} `;
  if (ladderorsnake === 1) {
    let temper2 = ` and you got a ladder !! . Gone up :) `;
    let finaler = tempString + temper2;
    document.querySelector(".displayerwin").textContent = finaler;
  } else {
    let temper2 = ` and you were eaten by a Snake !! .
     Gone down :( `;
    let finaler = tempString + temper2;
    document.querySelector(".displayerwin").textContent = finaler;
  }
}

let runner = function () {
  let num = Math.floor(Math.random() * 6) + 1;
  //   console.log(num);
  document.querySelector(".thedice").setAttribute("src", `${num}.png`);
  theCurrentPosition += num;
  displayCurrentloc();
  if (ladders[theCurrentPosition]) {
    displayMessage(theCurrentPosition, 1);
    theCurrentPosition = ladders[theCurrentPosition];
    displayCurrentloc();
  } else if (snakes[theCurrentPosition]) {
    displayMessage(theCurrentPosition, 0);
    theCurrentPosition = snakes[theCurrentPosition];
    displayCurrentloc();
  } else {
    if (theCurrentPosition == 100) {
      document.querySelector(".displayerwin").textContent = "You have won !!";
      document.querySelector(".roller").removeEventListener("click", runner);
      console.log(theCurrentPosition);
    } else if (theCurrentPosition > 100) {
      theCurrentPosition = 100 - (theCurrentPosition - 100);
      displayCurrentloc();
      document.querySelector(".displayerwin").textContent = "Keep playing :) ";
    } else {
      document.querySelector(".displayerwin").textContent = "Keep playing :) ";
    }
  }
};

document.querySelector(".roller").addEventListener("click", runner);
