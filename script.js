var buttons = document.getElementsByTagName("button");
var flag = true;
var indexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var count = 0;
var isGameEnd = false;

for (var i = 0; i < buttons.length; i++) {
  var currentButton = buttons[i];
  currentButton.addEventListener("click", printXorZero);
}

function printXorZero() {
  var currentButton = this;
  if (currentButton.innerText == "" && !isGameEnd) {
    var value = flag ? "X" : "0";
    currentButton.innerText = value;
    count++;
    flag = !flag;
    var userIndex = Number(currentButton.className);
    var indexInArray = indexArray.indexOf(userIndex);
    indexArray.splice(indexInArray, 1);
    console.log(indexArray);
    if (count > 4 || !isGameEnd) {
      if (isGameOver()) {
        console.log("user wins");
        document.getElementById("win").innerText = "User Wins";
        isGameEnd = false;
      } else {
        setTimeout(printByComputer, 3000);
      }
    }
  }
}

// check();

// function check() {
//   var a = prompt("Enter the level of the computer : Easy Medium Hard");
//   if (a == "Easy") {
//     console.log("easy mode selected");
//   }
//   else{
//     if(a == 'Medium'){
//         console.log('medium mode selected')
//     }
//     else{console.log('hard mode selected')}
//   }
// }

function printByComputer() {
  console.log(indexArray.length);
  var randBtn = Math.floor(Math.random() * indexArray.length);
  var emptyIndex = indexArray[randBtn];
  console.log(randBtn);
  if (buttons[emptyIndex].innerText == "" && !isGameEnd) {
    var value = flag ? "X" : "0";
    buttons[emptyIndex].innerText = value;
    count++;
    flag = !flag;
    var indexCompArray = indexArray.indexOf(
      Number(buttons[emptyIndex].className)
    );
    indexArray.splice(indexCompArray, 1);
    console.log(indexArray);
    if (count > 4) {
      if (isGameOver()) {
        console.log("computer wins");
        document.getElementById("win").innerText = "Computer Wins";
        isGameEnd = false;
      }
    }
  } else {
    console.log("space is occupied");
  }
}

function isNotBlank(currentButton) {
  return currentButton.innerText.trim().length > 0;
}

function isThreeSame(first, second, third) {
  if (isNotBlank(first) && isNotBlank(second) && isNotBlank(third)) {
    return (
      first.innerText == second.innerText && second.innerText == third.innerText
    );
  }
}

function isGameOver() {
  return (
    isThreeSame(buttons[0], buttons[1], buttons[2]) ||
    isThreeSame(buttons[3], buttons[4], buttons[5]) ||
    isThreeSame(buttons[6], buttons[7], buttons[8]) ||
    isThreeSame(buttons[0], buttons[3], buttons[6]) ||
    isThreeSame(buttons[1], buttons[4], buttons[7]) ||
    isThreeSame(buttons[2], buttons[5], buttons[8]) ||
    isThreeSame(buttons[0], buttons[4], buttons[8]) ||
    isThreeSame(buttons[2], buttons[4], buttons[6])
  );
}
