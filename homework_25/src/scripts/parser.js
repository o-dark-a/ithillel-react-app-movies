const { TIME_START } = require("./constants");

export function parseHoursToMinutes(time) {
    const [hours, minutes] = time.split(':');
    return (Number(hours) - TIME_START) * 60  + Number(minutes);
}