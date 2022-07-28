const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

let now = new Date();

let initialDate = prompt('Enter a date in the format: YYYY-MM-DD', '2022-04-09');
let date = {};

  if (dateRegex.test(initialDate)) {
    date = {
      from: new Date(initialDate),
      to: new Date(),
      [Symbol.iterator]() {
        return {
          prevDate: this.from,
          currentDate: this.to.getTime(),
          next() {
            if (this.prevDate.getTime() <= this.currentDate) {

              let interimDate = new Date(this.prevDate);
              let interimDateDay = interimDate.getDate() < 10 ? `0${interimDate.getDate()}` : interimDate.getDate();
              let interimDateMonth = interimDate.getMonth() + 1 < 10 ? `0${interimDate.getMonth() + 1}` : interimDate.getMonth() + 1;
              let interimDateYear = interimDate.getFullYear();

              this.prevDate.setDate(this.prevDate.getDate() + 1);

              return { done: false, value: `${interimDateDay}/${interimDateMonth}/${interimDateYear}`};

            } else {
              return { done: true, value: {}};
            }

          }
        }
      }
    };
  } else {
    console.error('Enter a date in the format: YYYY-MM-DD');
  }

for (let value of date) {
  console.warn('Date: ', value);
}
