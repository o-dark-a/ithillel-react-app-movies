import { renderEvents } from './renderEvents';
import { parseHoursToMinutes } from './parser';

tasksForm.addEventListener('submit', addEvent);

function addEvent(event) {
  event.preventDefault()

  const formOpener = document.querySelector('#form-opener');
  let newEventsArr = JSON.parse(localStorage.getItem('events'));

  let formData = new FormData(event.target);
  let formDataArr = [];

  for (const value of formData.values()) {
    formDataArr.push(value);
  }

  let [title, start, duration, background] = formDataArr;
  let newEventId = newEventsArr.length + 1;

  newEventsArr.push({
    start: parseHoursToMinutes(start),
    duration: +duration,
    title,
    id: newEventId,
    background,
  });

  const allEventsDomElements = document.querySelectorAll('.event');
    for (let elem of allEventsDomElements) {
      elem.remove();
    }

  formOpener.checked = false;

  renderEvents(newEventsArr);
  localStorage.setItem('events', JSON.stringify(newEventsArr));
}
