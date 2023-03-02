let storyOpening = document.querySelector(".story-opening");
let rules = document.querySelector(".Rules");
let title = document.querySelector("title");
let playButton = document.querySelector(".start-button");
console.log(playButton)
let sceneOne = document.querySelector(".Scene1");
let optionOne1 = document.querySelector(".option-one1");
let optionTwo1 = document.querySelector(".option-two1");
let option1Screen = document.querySelector(".option1Screen");
let Restart1 = document.querySelector(".Restart1");
let Scene2 = document.querySelector(".Scene2");
let optionOne2 = document.querySelector(".option-one2");

let option1Screen2 = document.querySelector(".option1Screen2");
let Continue = document.querySelector(".Continue");
let happyCat = document.querySelector(".happyCat");
let Continue2 = document.querySelector(".Continue2");
let Continue3 = document.querySelector(".Continue3");
let Scene3 = document.querySelector(".Scene3");
let optionOne3 = document.querySelector(".option-one3");
let optionTwo4 = document.querySelector(".option-two4");
let option1Screen3 = document.querySelector(".option1Screen3");
let Restart2 = document.querySelector(".Restart2");
let option2Screen3 = document.querySelector(".option2Screen3");
let Scene4 = document.querySelector(".Scene4");
let optionOne4 = document.querySelector(".option-one4");
let optionTwo5 = document.querySelector(".option-two5");
let option1Screen4 = document.querySelector(".option1Screen4");
let Restart4 = document.querySelector(".Restart4");
let Scene5 = document.querySelector(".Scene5");
let optionOne5 = document.querySelector(".option-one5");
let option1Screen5 = document.querySelector(".option1Screen5");
let Restart5 = document.querySelector(".Restart5");
let optionTwo2 = document.querySelector(".option-two2");
let optionTwo6 = document.querySelector(".option-two6");
let option2Screen4 = document.querySelector(".option2Screen4");
let Continue5 = document.querySelector(".Continue5");
let Scene6 = document.querySelector(".Scene6");
let Restart00 = document.querySelector(".Restart00");
/*
let option2Screen3=document.querySelector("")
*/



/*     */
playButton.onclick = function() {
  rules.style.display = "none";
  playButton.style.display = "none";
  sceneOne.style.display = "block";

  title.style.display = "none";
};


optionOne1.onclick = function() {
  option1Screen.style.display = "block";
  rules.style.display = "none";
  playButton.style.display = "none";
  sceneOne.style.display = "none";
  storyOpening.style.display = "none";
  title.style.display = "none";
};

Restart1.onclick = function() {
  option1Screen.style.display = "none";
  rules.style.display = "block";
  playButton.style.display = "block";
  storyOpening.style.display = "block";

};

optionTwo1.onclick = function() {
  Scene2.style.display = "block";
  option1Screen.style.display = "none";
  rules.style.display = "none";
  playButton.style.display = "none";
  sceneOne.style.display = "none";
  title.style.display = "none";

};

optionOne2.onclick = function() {
  option1Screen2.style.display = "block";
  option1Screen.style.display = "none";
  rules.style.display = "none";
  playButton.style.display = "none";
  sceneOne.style.display = "none";
  title.style.display = "none";
  Scene2.style.display = "none";
};

optionTwo2.onclick = function() {
  happyCat.style.display = "block";
  Scene2.style.display = "none";
  option1Screen.style.display = "none";
  rules.style.display = "none";
  playButton.style.display = "none";
  sceneOne.style.display = "none";

};


Continue.onclick = function() {
  Scene3.style.display = "block";
  option1Screen2.style.display = "none";
  happyCat.style.display = "none";

};

Continue2.onclick = function() {
  Scene3.style.display = "block";
  option1Screen2.style.display = "none";
  happyCat.style.display = "none";

};


optionOne3.onclick = function() {
  Scene3.style.display = "none";
  option1Screen3.style.display = "block";
};

optionTwo4.onclick = function() {
  Scene3.style.display = "none";
  option2Screen3.style.display = "block";
}

Continue3.onclick = function() {
  Scene4.style.display = "block";
  Scene3.style.display = "none";
  option2Screen3.style.display = "none";
  option1Screen3.style.display = "none";
};

optionOne4.onclick = function() {
  option1Screen4.style.display = "block";
  Scene4.style.display = "none";
  Scene3.style.display = "none";
  option2Screen3.style.display = "none";
  option1Screen3.style.display = "none";
};

Restart2.onclick = function() {
  option1Screen4.style.display = "block";
  rules.style.display = "block";
  playButton.style.display = "block";
  option1Screen4.style.display = "none";
  Scene4.style.display = "none";
  Scene3.style.display = "none";
  option2Screen3.style.display = "none";
  option1Screen3.style.display = "none";
};


Restart4.onclick = function() {
  option1Screen4.style.display = "none";
  rules.style.display = "block";
  playButton.style.display = "block";
  Scene4.style.display = "none";

};



optionOne5.onclick = function() {
  option1Screen5.style.display = "block";
  Scene5.style.display = "none";
  Scene4.style.display = "none";
};

Restart5.onclick = function() {
  option1Screen5.style.display = "none";
  rules.style.display = "block";
  playButton.style.display = "block";
  Scene5.style.display = "none";
  optionOne5.style.display = "none";
  option2Screen4.style.display = "none";
};

optionTwo5.onclick = function() {
  Scene5.style.display = "block";
  Scene4.style.display = "none";
  option2Screen3.style.display = "none";
  option1Screen4.style.display = " none";
};

optionTwo6.onclick = function() {
  option2Screen4.style.display = "block";
  Scene5.style.display = "none";

};


Continue5.onclick = function() {
  Scene6.style.display = "block";
  option2Screen4.style.display = "none";
};

Restart00.onclick = function() {
  Scene6.style.display = "none";
  rules.style.display = "block";
  playButton.style.display = "block";
  storyOpening.style.display = "block";
};


const audio = new Audio("https://www.myinstants.com/media/sounds/the-end-meow-by-nekocat-just-3-second-1.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});