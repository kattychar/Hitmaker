//контейнер для клавиш
const keysElements = document.querySelector('.keys');

//получаем шаблон клавиши
const keyTemplate = document.querySelector('#key')
.content;

let arrayKeys = [65,87,83,69,68,70,84,71,89,72,85,74,75,79,76,80,186];
let noteData = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E'];
let hintsData = ['A','W','S','E','D','F','T','G','Y','H','U','J','K','O','L','P',';'];

const keyFragment = document.createDocumentFragment();
 
arrayKeys.forEach((elem,index) => {
  const keyElement = keyTemplate.cloneNode(true);
  keyElement.querySelector('.key').setAttribute('data-key',elem);
  keyElement.querySelector('.key').setAttribute('data-note',noteData[index]);
  keyElement.querySelector('.hints').textContent = hintsData[index];

  switch(elem) {
    case 87:
    case 69:
    case 84:
    case 89:
    case 85:
    case 79:
    case 80:
      keyElement.querySelector('.key').classList.add("sharp");
      break;
  }

  keyFragment.appendChild(keyElement);
});

keysElements.appendChild(keyFragment);
