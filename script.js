import './keys.js';

const keys = document.querySelectorAll('.key');
const nowplaying = document.querySelector('.nowplaying');
const hints = document.querySelectorAll('.hints');

function clickOnKey(evt) {
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);
  const note = key.getAttribute("data-note");
  nowplaying.innerHTML = note;
  audio.play();
  key.classList.add('playing');
}

function removeAnimation(element) {
  this.classList.remove('playing');
}

keys.forEach(elem => elem.addEventListener('transitionend', removeAnimation));

window.addEventListener('keydown', clickOnKey);
