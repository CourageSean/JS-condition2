let ageInput = document.getElementById("age");
let txt = document.getElementById("txt");
function check() {
  if (ageInput.value >= 18) {
    txt.innerHTML = "volljährig";
  } else {
    txt.innerHTML = "minderjährig";
  }
}

let weather1 = document.getElementById("weather1");
let txt2 = document.getElementById("txt2");
let current = document.getElementById("current");

function weather() {
  current.innerHTML = weather1.value;
  if (weather1.value >= 0 && weather1.value <= 3) {
    txt2.innerHTML = "Bad";
    txt2.style.color = "red";
  } else if (weather1.value > 3 && weather1.value <= 5) {
    txt2.innerHTML = "Okay";
    txt2.style.color = "orange";
  } else if (weather1.value > 5 && weather1.value <= 7) {
    txt2.innerHTML = "Good";
    txt2.style.color = "lightgreen";
  } else {
    txt2.innerHTML = "Super";
    txt2.style.color = "green";
  }
}

let ageInput1 = document.getElementById("age1");
let txt3 = document.getElementById("txt3");
function check1() {
  if (ageInput1.value >= 18) {
    txt3.innerHTML = "Ja. Du kannst Shisha rauchen";
  } else {
    txt3.innerHTML = "Du darfst noch nicht Shisha rauchen";
  }
}

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

function berechnen() {
  let sum = Number(num1.value) + Number(num2.value);
  if (num1.value === num2.value) {
    sum = (Number(num1.value) + Number(num2.value)) * 5;
  }
  result.innerHTML = sum;
}
