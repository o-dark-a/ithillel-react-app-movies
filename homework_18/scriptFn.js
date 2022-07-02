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

function Worker(name, surname, rate, days, position) {
  this.name = name;
  this.surname = surname;
  this.rate = rate;
  this.days = days;
  this.position = position;
}

Worker.prototype.getSalary = function() {
  return this.rate * this.days;
}
Worker.prototype.getInfo = function() {
  return `${this.name} ${this.surname} got $${this.getSalary()}`;
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

function Boss(name, surname, rate, days, totalProfit = company.totalProfit) {
  Worker.apply(this, arguments);
}

Boss.prototype = Object.create(Worker.prototype);
Boss.prototype.constructor = Boss;
Boss.prototype.getSalary = function() {
  return +(Worker.prototype.getSalary.call(this) + company.totalProfit / 10).toFixed();
}

function Trainee(name, surname, rate, days) {
  Worker.apply(this, arguments);
}

Trainee.prototype = Object.create(Worker.prototype);
Trainee.prototype.constructor = Trainee;
Trainee.prototype.getSalary = function() {
  if (this.days < 60) {
    return +(Worker.prototype.getSalary.call(this) * 0.7).toFixed();
  }
  return Worker.prototype.getSalary.call(this);
}

for (let employee of employees) {
  createNewEmployee(employee.name, employee.surname, employee.rate, employee.days, employee.position);
}

company.setTotalProfit();

console.log(company);

for (let employeeInfo of [...company.bosses, ...company.workers, ...company.trainees]) {
  console.log(`${employeeInfo.name} ${employeeInfo.surname} - position: ${employeeInfo.position}, rate: ${employeeInfo.rate}, days: ${employeeInfo.days}`);
  console.log(employeeInfo.getInfo());
}
