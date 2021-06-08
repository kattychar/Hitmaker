//контейнер для клавиш
const keysElements = document.querySelector('.keys');

//получаем шаблон клавиши
const keyTemplate = document.querySelector('#key')
.content
.querySelector('.key');

let arrayKeys = [65,68,69,70,71,72,74,75,76,79,80,83,84,85,87,89,186];
let noteData = [C,C#,D,D#,E,F,F#,G,G#,A,A#,B,C,C#,D,D#,E];
let hintsData = [A,W,S,E,D,F,T,G,Y,H,U,J,K,O,L,P,;];

const keyFragment = document.createDocumentFragment();
 
arrayKeys.forEach((elem) => {
  const keyElement = keyTemplate.cloneNode(true);
  keyElement.querySelector('.key').data-key = elem;
  keyElement.querySelector('.key').data-note = noteData[elem];
  keyElement.querySelector('.hints').textContent = hintsData[elem];
  keyFragment.appendChild(keyElement);
});

keysElements.appendChild(keyFragment);
