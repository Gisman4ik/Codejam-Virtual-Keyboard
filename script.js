document.addEventListener('DOMContentLoaded', function htmlStructureLoad() {
  let keysValueRuLower = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Enter', 'Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '|', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Cmd', 'Ctrl'];
  let keysValueRuUpper = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Enter', 'Capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '|', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Cmd', 'ctrl'];
  let keysValueEngLower = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Enter', 'Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '|', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Cmd', 'Ctrl'];
  let keysValueEngUpper = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Enter', 'Capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '|', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Cmd', 'Ctrl'];
  let keysEventValues = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Enter', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Backslash', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ContextMenu', 'ControlRight'];
  const keys = [];
  const wrapper = document.createElement('div');
  const textarea = document.createElement('textarea');
  const keyboard = document.createElement('div');
  if (localStorage.language === undefined) {
    localStorage.setItem('language', 'ENG');
  }
  const createKeyBtn = (classKey) => {
    const keyBtn = document.createElement('div');
    keyBtn.classList.add(classKey);
    return keyBtn;
  };
  const createSpan = (classSpan) => {
    const keySpan = document.createElement('span');
    keySpan.classList.add(classSpan);
    return keySpan;
  };
  const buttonsFill = () => {
    for (let i = 0; i < 60; i += 1) {
      keys.push(createKeyBtn('keyBtn'));
      keys[i].id = keysEventValues[i];
    }
  };
  const addButtonClasses = () => {
    wrapper.classList.add('wrapper');
    textarea.classList.add('textarea');
    keyboard.classList.add('keyboard');
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
    const cmd = keys[58];
    cmd.classList.add('keyBtn_cmd');
  };
  const createButtonsSpans = ()=>{
    let counter = 0;
    keys.forEach((btn) => {
      keyboard.append(btn);

      btn.append(createSpan('value-ru'));
      if (localStorage.language === 'ENG') {
        btn.childNodes[0].classList.add('hide');
      }
      btn.childNodes[0].append(createSpan('value-lower'));
      btn.childNodes[0].childNodes[0].append(keysValueRuLower[counter]);
      btn.childNodes[0].append(createSpan('value-upper'));
      btn.childNodes[0].childNodes[1].classList.add('hide');
      btn.childNodes[0].childNodes[1].append(keysValueRuUpper[counter]);

      btn.append(createSpan('value-eng'));
      if (localStorage.language === 'RU') {
        btn.childNodes[1].classList.add('hide');
      }
      btn.childNodes[1].append(createSpan('value-lower'));
      btn.childNodes[1].childNodes[0].append(keysValueEngLower[counter]);
      btn.childNodes[1].append(createSpan('value-upper'));
      btn.childNodes[1].childNodes[1].classList.add('hide');
      btn.childNodes[1].childNodes[1].append(keysValueEngUpper[counter]);

      counter += 1;
    });
  };
  buttonsFill();
  addButtonClasses();
  createButtonsSpans();
  textarea.setAttribute('readonly', 'true');
  document.body.append(wrapper);
  document.querySelector('.wrapper').append(textarea, keyboard);
});
document.addEventListener('DOMContentLoaded', function keyboradFeatures() {
  let symbolCase = 'Lower';
  let keyBtnsRU = document.querySelectorAll('.value-ru');
  let keyBtnsENG = document.querySelectorAll('.value-eng');
  let keyBtns = document.querySelectorAll('.keyBtn');
  const capslockEvent = ()=>{
    if (symbolCase === 'Lower') {
      symbolCase = 'Upper';
      keyBtnsRU.forEach((node)=> {
        node.childNodes[0].classList.add('hide');
        node.childNodes[1].classList.remove('hide');
      });
      keyBtnsENG.forEach((node)=> {
        node.childNodes[0].classList.add('hide');
        node.childNodes[1].classList.remove('hide');
      });
    } else {
      symbolCase = 'Lower';
      keyBtnsRU.forEach((node)=> {
        node.childNodes[1].classList.add('hide');
        node.childNodes[0].classList.remove('hide');
      });
      keyBtnsENG.forEach((node)=> {
        node.childNodes[1].classList.add('hide');
        node.childNodes[0].classList.remove('hide');
      });
    }
  };
  const eventOnPress = (textarea, button) => {
    if (button.id === 'CapsLock') {
      capslockEvent();
      return undefined;
    }
    if (button.id === 'Space') {
      return `${textarea.value} `;
    }
    if (button.id === 'Enter') {
      return `${textarea.value}\n`;
    }
    if (button.id === 'Backspace') {
      const size = textarea.value.length;
      if (size > 1) return textarea.value.slice(0, size - 1);
      return '';
    }
    if (button.id === 'Tab' || button.id === 'ControlLeft' || button.id === 'AltLeft'
      || button.id === 'ShiftLeft' || button.id === 'MetaLeft' || button.id === 'ShiftRight'
      || button.id === 'AltRight' || button.id === 'ContextMenu' || button.id === 'ControlRight') {
      return undefined;
    }
    if (localStorage.language === 'ENG') {
      if (symbolCase === 'Lower') {
        let symbol = button.childNodes[1].childNodes[0].innerText;
        return `${textarea.value}${symbol}`;
      }
      if (symbolCase === 'Upper') {
        let symbol = button.childNodes[1].childNodes[1].innerText;
        return `${textarea.value}${symbol}`;
      }
    }
    if (localStorage.language === 'RU') {
      if (symbolCase === 'Lower') {
        let symbol = button.childNodes[0].childNodes[0].innerText;
        return `${textarea.value}${symbol}`;
      }
      if (symbolCase === 'Upper') {
        let symbol = button.childNodes[0].childNodes[1].innerText;
        return `${textarea.value}${symbol}`;
      }
    }
    return undefined;
  };
  const keyHandler = (event) => {
    const textarea = document.querySelector('.textarea');
    let button;
    let result;
    if (event.code) {
      button = document.getElementById(`${event.code}`);
    } else {
      button = event.target.closest('.keyBtn');
    }

    if (event.type === 'keydown') {
      button.classList.add('active-key');
      result = eventOnPress(textarea, button);
      if (result !== undefined || result != null) {
        textarea.value = result;
      }
    } else if (event.type === 'keyup') {
      button.classList.remove('active-key');
    } else if (event.type === 'mousedown') {
      button.classList.add('active-key');
      result = eventOnPress(textarea, button);
      if (result !== undefined || result != null) {
        textarea.value = result;
      }
    } else if (event.type === 'mouseout') {
      button.classList.remove('active-key');
    } else if (event.type === 'mouseup') {
      button.classList.remove('active-key');
    } else {
      return undefined;
    }
    return undefined;
  };
  const shiftChange = (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (event.type === 'keydown') {
        capslockEvent();
      }
      if (event.type === 'keyup') {
        capslockEvent();
      }
    }
  };
  const languageChange = (event) => {
    if (event.altKey && event.ctrlKey) {
      if (localStorage.language === 'RU') {
        localStorage.setItem('language', 'ENG');
        keyBtnsRU.forEach((node) => {
          node.classList.add('hide');
        });
        keyBtnsENG.forEach((node) => {
          node.classList.remove('hide');
        });
      } else {
        localStorage.setItem('language', 'RU');
        keyBtnsENG.forEach((node) => {
          node.classList.add('hide');
        });
        keyBtnsRU.forEach((node) => {
          node.classList.remove('hide');
        });
      }
    }
  };
  keyBtns.forEach((key)=>{
    key.addEventListener('mousedown', keyHandler);
    key.addEventListener('mouseup', keyHandler);
    key.addEventListener('mouseout', keyHandler);
  });
  document.addEventListener('keydown', shiftChange);
  document.addEventListener('keyup', shiftChange);
  document.addEventListener('keydown', languageChange);
  document.addEventListener('keydown', keyHandler);
  document.addEventListener('keyup', keyHandler);
});
