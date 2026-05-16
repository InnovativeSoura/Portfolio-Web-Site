// script.js

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

const textArray = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Designer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === textArray.length){
    count = 0;
  }

  currentText = textArray[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".multiple-text").textContent = letter;

  if(letter.length === currentText.length){
    count++;
    index = 0;
    setTimeout(type, 1000);
  }else{
    setTimeout(type, 120);
  }

})();