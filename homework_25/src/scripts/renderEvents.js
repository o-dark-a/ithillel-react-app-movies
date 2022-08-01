import { TIME_INTERVAL, TIME_START } from "./constants";
import { parseHoursToMinutes } from './parser';

// const dayInMinutes = 60 * 60 * 7;

export function renderEvents(events) {
    const timeSlots = document.querySelectorAll('.event-wrap');

    for (let eventItem of events) {
        const minutesStart = TIME_START * 60 + eventItem.start; // 480

        for (let i = 0; i < timeSlots.length; i++) {
            const timeSchedule = timeSlots[i].getAttribute('data-time');
            const minutesSchedule = TIME_START * 60 + parseHoursToMinutes(timeSchedule);

            if (!(minutesStart >= minutesSchedule && minutesStart < minutesSchedule + TIME_INTERVAL)) {
                continue;
            }

            if (minutesStart - minutesSchedule < (TIME_INTERVAL / 2 + 1)) {
                appendEvent(eventItem, timeSlots[i], `${minutesStart - minutesSchedule}px`);
            } else {
                appendEvent(eventItem, timeSlots[i + 1], `-${(eventItem.duration - eventItem.start) * 2}px`);
            }
        }
    }
}

function appendEvent(event, timeSlot, top) {
    const div = document.createElement('div');
    div.classList.add('event');
    // bad practice
    div.innerHTML = `
        <div class="event-content">
            <span data-id=${event.id}>${event.title}</span>
        </div>
        <button class="btn delete__property" data-title="${event.title}">x</button>
    `;
    div.style.background = `${event.background}80`;
    div.style.borderLeft = `4px solid ${event.background}`;
    div.style.height = `${2 * event.duration}px`;
    div.style.top = top;

    timeSlot.append(div);
}