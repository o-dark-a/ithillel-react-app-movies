import '../styles/style.scss';
import './schedule';
import { URL } from './constants';
import { renderEvents } from './renderEvents';
import { deleteEvent } from './deleteEvent';

async function start() {
    try {
        const events = await (await fetch(URL)).json();
        renderEvents(events);
        deleteEvent(events);

    } catch (err) {
        console.error('Check your internet connection or server running');
    }
}

start();