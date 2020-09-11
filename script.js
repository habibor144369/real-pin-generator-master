
// RandomNumber
function creactRandomNumber(min, max) {
    min = Math.ceil(1000);
    max = Math.floor(9999);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const generateBtn = document.getElementById('rendomBtn');
const generateInput = document.getElementById('rendomInput');
generateBtn.addEventListener('click', function () {
    generateInput.value = creactRandomNumber().toString();
})

// calcUserButton&Input
function calcNumber(number) {
    let calcUserInput = document.getElementById('calcUserInput');
     calcUserInput.value = calcUserInput.value + number.innerText;
}
const numberBtn = document.querySelectorAll(".button");
numberBtn.forEach((item) => {
  item.addEventListener('click', function () {
    calcNumber(item);
  });
});

// clear&DeleteBtn
function clearDeleteBtn(id) {
    let userInput = document.getElementById('calcUserInput');  
    if (id == true) {
      newUserInput = userInput.value = '';
    }
    if (id == false) {
      newUserInput = userInput.value = userInput.value.slice(1, -1);
    }
}
document.getElementById('clear').addEventListener('click', function () {
  clearDeleteBtn(true);
})
document.getElementById('delete').addEventListener('click', function () {
  clearDeleteBtn(false);
})

// notify-area
function notify() {
  match.style.display = "none";
  notMatch.style.display = "none";
}
let match = document.getElementById('match');
let notMatch = document.getElementById('notMatch');
notify() 

// checkingPinMatch
const submitBtn = document.getElementById('submitBtn');
let tryLeft = document.getElementById('try');
submitBtn.addEventListener('click', function () {
    if (rendomInput.value.length == 4) {
      if (rendomInput.value == calcUserInput.value) {
        match.style.display = "block";
        notMatch.style.display = "none";
      }
      else {
        notMatch.style.display = "block";
        match.style.display = "none";
      }
    }
})

