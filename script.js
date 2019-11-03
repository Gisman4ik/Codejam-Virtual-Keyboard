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
let keysValueRuUpper = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ','Enter', 'Capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.','|', 'Shift','Ctrl', 'Win', 'Alt','Space', 'Alt', 'Cmd', 'ctrl'];
let keysValueEngLower =['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','Backspace','Tab','q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']','Enter','Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"','Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','|','Shift','Ctrl','Win','Alt','Space','Alt','Cmd','Ctrl'];
let keysValueEngUpper = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=','Backspace','Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']','Enter','Capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"','Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '|','Shift', 'Ctrl','Win','Alt','Space','Alt','Cmd','Ctrl'];
const keys = [];

for (let i = 0; i < 60; i++) {
  keys.push(createKeyBtn('keyBtn'));
  keys[i].classList.add (keysValueEngUpper[i]);
}

keys.forEach ((btn,counter) => {
  keyboard.append(btn);

  btn.append(createSpan('value-ru'));
    btn.childNodes[0].append (createSpan ('value-lower'));
    btn.childNodes[0].childNodes[0].append (keysValueRuLower[counter]);
    btn.childNodes[0].append (createSpan ('value-upper'));
    btn.childNodes[0].childNodes[1].append (keysValueRuUpper[counter]);

  btn.append(createSpan('value-eng'));
    btn.childNodes[1].append (createSpan ('value-lower'));
    btn.childNodes[1].childNodes[0].append (keysValueEngLower[counter]);
    btn.childNodes[1].append (createSpan ('value-upper'));
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
const wrapper = document.createElement('wrapper');
wrapper.classList.add('wrapper');

document.body.append (wrapper);
document.querySelector('.wrapper').append (textarea,keyboard);

for (let i = 0; i < document.querySelector('.keyboard').childNodes.length; i++) {

  for (let i=0; i<document.querySelector('.keyBtn').childNodes.length; i++) {
    document.querySelector('.keyBtn').childNodes[i]
  }
}
});

let keysEventValues = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Backslash', 'ShiftRight', 'ControlLeft', 'Fn', 'MetaLeft', 'Space', 'AltRight', 'Space', 'AltRight', 'ContextMenu', 'ControlRight'];


