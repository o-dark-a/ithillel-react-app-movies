import { renderEvents } from './renderEvents';

const container = document.querySelector('.container');
container.addEventListener('click', removeEvent);

function removeEvent(event) {
  let newEventsArr = JSON.parse(localStorage.getItem('events'));

  const cssClassesArr = Array.from(event.target.classList);

  if (cssClassesArr.some(elem => elem === 'delete__property')) {

    const allEventsDomElements = document.querySelectorAll('.event');
    for (let elem of allEventsDomElements) {
      elem.remove();
    }

    let eventId = event.target.previousElementSibling.children[0].attributes["data-id"].value;
    newEventsArr = newEventsArr.filter(event => event.id !== +eventId).map((event, i) => {
      return {
        ...event,
        id: i + 1,
      }
    });

    renderEvents(newEventsArr);
    localStorage.setItem('events', JSON.stringify(newEventsArr));
  }
}
