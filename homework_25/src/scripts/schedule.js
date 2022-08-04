import { TIME_START, TIME_INTERVAL, TIME_END } from "./constants";

function appendEventItem(time) { // 8:00, 8:30, 9:00
    const container = document.querySelector('.container');
  
    const divEvent = document.createElement('div');
    divEvent.classList.add('event-item');
  
    const divEventTime = document.createElement('div');
    divEventTime.style.padding = '0 5px 0 0';
  
    if (time.includes(TIME_INTERVAL)) {
      divEventTime.classList.add('event-time-small');
    }
  
    const pTime = document.createElement('p');
    pTime.textContent = time;
  
    const divWrap = document.createElement('div');
    divWrap.classList.add('event-wrap');
    divWrap.setAttribute('data-time', time);
  
    divEventTime.append(pTime);
    divEvent.append(divEventTime);
    divEvent.append(divWrap);
    container.append(divEvent);
  }

function setTimeInterval() {
    const length = (TIME_END - TIME_START) * 2 + 1;
    const arr = new Array(length).fill(null).map((_, i) => {
        if (i % 2) {
            return `${TIME_START + Math.floor(i / 2)}:${TIME_INTERVAL}`; // непарні числа
        }
        return `${TIME_START + i / 2}:00`; // парні числа
    });

    return arr;
}

for (let time of setTimeInterval()) {
    appendEventItem(time);
}