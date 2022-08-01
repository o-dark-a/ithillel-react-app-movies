import { renderEvents } from './renderEvents';

export function deleteEvent(events) {
  const container = document.querySelector('.container');
  let newEventsArr = [...events];

  container.addEventListener('click', removeEvent);

   function removeEvent(event) {
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
    }
  }
}
