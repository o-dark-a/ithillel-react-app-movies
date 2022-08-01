const listEvents = [
  {
    start: 5,
    duration: 25,
    title: "Morning work-out",
  },
  {
    start: 30,
    duration: 30,
    title: "Travel to work",
  },
  {
    start: 45,
    duration: 15,
    title: "Breakfast",
  },
  {
    start: 75,
    duration: 15,
    title: "Code review",
  },
  {
    start: 100,
    duration: 30,
    title: "Meeting with Monika",
  },
  {
    start: 105,
    duration: 60,
    title: "Interview: Mattew",
  },
  {
    start: 180,
    duration: 35,
    title: "Lunch",
  },
  {
    start: 250,
    duration: 30,
    title: "Skype call",
  },
  {
    start: 300,
    duration: 60,
    title: "Development",
  },
  {
    start: 400,
    duration: 20,
    title: "Back to home",
  },
  {
    start: 440,
    duration: 100,
    title: "Cinema: Harry Potter And The Chamber Of Secrets",
  },
  {
    start: 460,
    duration: 20,
    title: "Walking with the dog",
  },
];

let eventLists = listEvents.map((item, i) => ({
  ...item,
  id: i + 1,
  background: "#E2ECF5" ,
}));

module.exports = () => {
  return { events: eventLists };
};
