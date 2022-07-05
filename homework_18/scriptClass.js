const company = {
  totalProfit: 0,
  bosses: [],
  workers: [],
  trainees: [],
  getAllWorkers: function() {
    return this.workers;
  },
  getWorker: function(id) {
    return this.workers[id];
  },
  getTrainees: function(id) {
    return this.trainees[id];
  },
  getBosses: function(id) {
    return this.bosses[id];
  },
  setTotalProfit: function() {
    this.totalProfit = 0;
    for (let worker of this.getAllWorkers()) {
      this.totalProfit += Worker.prototype.getSalary.call(worker);
    }
  },
};

class Worker {
  constructor(name, surname, rate, days, position) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.position = position;
  }
  getSalary() {
    return this.rate * this.days;
  }
  getInfo() {
    return `${this.name} ${this.surname} got $${this.getSalary()}`;
  }
}

function createNewEmployee(name, surname, rate, daysWorked = 0, position = 'worker') {
  switch (position) {
    case 'trainee':
      company.trainees.push(new Trainee(name, surname, rate, daysWorked, position));
      break;
    case 'boss':
      company.bosses.push(new Boss(name, surname, rate, daysWorked, position));
      break;
    default:
      company.workers.push(new Worker(name, surname, rate, daysWorked, position));
  }
}

class Boss extends Worker {
  constructor(totalProfit = company.totalProfit) {
    super();
    this.totalProfit = totalProfit;
  }
  getSalary() {
    return +(this.rate * this.days + company.totalProfit / 10).toFixed();
  }
}

class Trainee extends Worker {
  getSalary() {
    if (this.days < 60) {
      return +(this.rate * this.days * 0.7).toFixed();
    }
    return this.rate * this.days;
  }
}

for (let employee of employees) {
  createNewEmployee(employee.name, employee.surname, employee.rate, employee.days, employee.position);
}

company.setTotalProfit();

for (let employeeInfo of [...company.bosses, ...company.workers, ...company.trainees]) {
  console.log(`${employeeInfo.name} ${employeeInfo.surname} - position: ${employeeInfo.position}, rate: ${employeeInfo.rate}, days: ${employeeInfo.days}`);
  console.log(employeeInfo.getInfo());
}
