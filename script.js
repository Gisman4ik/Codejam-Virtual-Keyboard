document.addEventListener('DOMContentLoaded', function htmlLoad () {
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

function createKeyBtn (classKey) {
  const keyBtn = document.createElement('div');
  keyBtn.classList.add(classKey);
  return keyBtn;
}

function createSpan (classSpan) {
  const keySpan = document.createElement('span');
  keySpan.classList.add (classSpan);
  return keySpan;
}

let keysValueRuLower = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','Enter','Capslock','ф','ы','в','а','п','р','о','л','д','ж','э','Shift','я','ч','с','м','и','т','ь','б','ю','.','|','Shift','Ctrl','Win','Alt','Space','Alt','Cmd','Ctrl'];
let keysValueRuUpper = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '-', '=','Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ','Enter', 'Capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.','|', 'Shift','Ctrl', 'Win', 'Alt','Space', 'Alt', 'Cmd', 'ctrl'];
let keysValueEngLower =['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','Backspace','Tab','q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']','Enter','Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"','Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','|','Shift','Ctrl','Win','Alt','Space','Alt','Cmd','Ctrl'];
let keysValueEngUpper = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+','Backspace','Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']','Enter','Capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"','Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '|','Shift', 'Ctrl','Win','Alt','Space','Alt','Cmd','Ctrl'];
let keysEventValues = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Enter', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Backslash', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ContextMenu', 'ControlRight'];
const keys = [];

for (let i = 0; i < 60; i++) {
  keys.push(createKeyBtn('keyBtn'));
  keys[i].id=keysEventValues[i];
}

keys.forEach ((btn,counter) => {
  keyboard.append(btn);

  btn.append(createSpan('value-ru'));
  btn.childNodes[0].classList.add('hide');
    btn.childNodes[0].append (createSpan ('value-lower'));
    btn.childNodes[0].childNodes[0].append (keysValueRuLower[counter]);
    btn.childNodes[0].append (createSpan ('value-upper'));
    btn.childNodes[0].childNodes[1].classList.add('hide');
    btn.childNodes[0].childNodes[1].append (keysValueRuUpper[counter]);

  btn.append(createSpan('value-eng'));
    btn.childNodes[1].append (createSpan ('value-lower'));
    btn.childNodes[1].childNodes[0].append (keysValueEngLower[counter]);
    btn.childNodes[1].append (createSpan ('value-upper'));
    btn.childNodes[1].childNodes[1].classList.add('hide');
    btn.childNodes[1].childNodes[1].append (keysValueEngUpper[counter]);

  counter++;
})

const backspace = keys[13];
backspace.classList.add('keyBtn_backspace');

const enter = keys[27];
enter.classList.add('keyBtn_enter');

const capslock = keys[28];
capslock.classList.add('keyBtn_capslock');

const leftShift = keys[40];
leftShift.classList.add('keyBtn_leftShift');

const rightShift = keys[52];
rightShift.classList.add('keyBtn_rightShift');

const space = keys[56];
space.classList.add('keyBtn_space');

const fn = keys[58];
fn.classList.add('keyBtn_fn');

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

document.body.append (wrapper);
document.querySelector('.wrapper').append (textarea,keyboard);

const keyHandler = (event) => {
  let button,result;
  if (event.code) button = document.getElementById(`${event.code}`);
  else button = event.button.closest('.keyBtn');
  const textarea = document.querySelector('.textarea');
  textarea.style.overflowY = 'auto';
  switch (event.type) {
    case 'mousedown':
      button.classList.add('active-key');
      result = eventOnPress(textarea, button);
      if (result !== undefined || result != null) {
        textarea.value = result;
      }
      break;
    case 'mouseup':
      button.classList.remove('active-key');
      break;
    case 'keydown':
      button.classList.add('active-key');
      result = eventOnPress(textarea, button);
      if (result !== undefined || result != null) {
        textarea.value = result;
      }
      break;
    case 'keyup':
      button.classList.remove('active-key');
      break;
    default:
      break;
  }
};

let language = 'ENG';
let symbolCase = 'Lower';
let keyBtnsRU = document.querySelectorAll('.value-ru');
let keyBtnsENG = document.querySelectorAll('.value-eng');
const eventOnPress = (textarea, button) => {
  if(button.id ==='AltLeft'){
    return;
  }
  if(button.id === 'ControlLeft'){
    return;
  }
  if (button.id === 'CapsLock'){
    if (symbolCase === "Lower") {
      symbolCase = "Upper";
      keyBtnsRU.forEach((node)=> {
        node.childNodes[0].classList.add('hide');
        node.childNodes[1].classList.remove('hide');
      })
      keyBtnsENG.forEach((node)=> {
        node.childNodes[0].classList.add('hide');
        node.childNodes[1].classList.remove('hide');
      })
      return
    }
    else {
      symbolCase = "Lower";
      keyBtnsRU.forEach((node)=> {
        node.childNodes[1].classList.add('hide');
        node.childNodes[0].classList.remove('hide');
      })
      keyBtnsENG.forEach((node)=> {
        node.childNodes[1].classList.add('hide');
        node.childNodes[0].classList.remove('hide');
      })
      return
    }
  }
  if (button.id ==='Space') { return `${textarea.value} `; }
  if (button.id === 'Enter') { return `${textarea.value}\n`; }
  if (button.id ==='Backspace') {
    const size = textarea.value.length;
    if (size > 1) return textarea.value.slice(0, size - 1);
    return '';
  }
  if(button.id ==='Tab' || button.id ==='ShiftLeft' || button.id ==='MetaLeft' || button.id ==='ShiftRight' || button.id === 'AltRight' || button.id === 'ContextMenu'|| button.id ==='ControlRight') {
    return;
  }
  if(language === "ENG") {
    if(symbolCase === "Lower"){
    let symbol = button.childNodes[1].childNodes[0].innerText;
    return `${textarea.value}${symbol}`;
    }
    else if (symbolCase === "Upper"){
      let symbol = button.childNodes[1].childNodes[1].innerText;
      return `${textarea.value}${symbol}`;
    }
  }
  if(language === "RU") {
    if(symbolCase === "Lower"){
    let symbol = button.childNodes[0].childNodes[0].innerText;
    return `${textarea.value}${symbol}`;
    }
    else if (symbolCase === "Upper"){
      let symbol = button.childNodes[0].childNodes[1].innerText;
      return `${textarea.value}${symbol}`;
    }
  }
}

const languageChange = (event) => {
  if (event.altKey && event.ctrlKey){
    if (language === 'RU') {
      language = 'ENG';
      keyBtnsRU.forEach((node) => {
        node.classList.add('hide');
      })
      keyBtnsENG.forEach((node) => {
        node.classList.remove('hide');
      })
    }
    else {
      language='RU';
      keyBtnsENG.forEach((node) => {
        node.classList.add('hide');
      })
      keyBtnsRU.forEach((node) => {
        node.classList.remove('hide');
      })
    }
  }
}

document.addEventListener('keydown', languageChange);
document.addEventListener('keydown', keyHandler);
document.addEventListener('keyup', keyHandler);
});
