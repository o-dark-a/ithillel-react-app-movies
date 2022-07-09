class Student {
  static id = 1;

  constructor(enrollee) {
    this.id = Student.id++;
    this.name = enrollee.name;
    this.surname = enrollee.surname;
    this.ratingPoint = enrollee.ratingPoint;
    this.schoolPoint = enrollee.schoolPoint;
    this.overallRating = this.ratingPoint + this.schoolPoint;
  }
}

class University {
  static name = '';
  #students = [];

  constructor(name) {
    this.name = name;
  }

  createNewStudent(enrollee) {
    return new Student(enrollee);
  }

  addStudend(student) {
    let newStudent = {};

    if (Array.isArray(student)) {
      for (let ones of student) {
        newStudent = this.createNewStudent(ones);
        this.#students.push({
          ...newStudent,
          isSelfPayment: this.setStudentPaymentStatus(newStudent)
        });
      }
    } else {
      newStudent = this.createNewStudent(student);
      this.#students.push({
        ...newStudent,
        isSelfPayment: this.setStudentPaymentStatus(student)
      });
    }

  }

  setStudentPaymentStatus(student) {
    let bestStudents = this.getBestStudent();

    if (!bestStudents) {
      return false;
    }

    if (student.ratingPoint < 800 || bestStudents[bestStudents.length - 1].overallRating > student.overallRating) {
      return true;
    } else {
      bestStudents[bestStudents.length - 1].isSelfPayment = true;
      return false;
    }
  }

  getBestStudent() {

    let students = [...this.#students];

    if (students.length > 1) {

      let studentsWithHighRatingPoint = students.filter(student => student.ratingPoint >= 800);
      studentsWithHighRatingPoint.sort((student1, student2) => student1.overallRating < student2.overallRating ? 1 : -1);

      return studentsWithHighRatingPoint.length > 5 ? studentsWithHighRatingPoint.slice(0, 5) : studentsWithHighRatingPoint;
    }
    
  }

  getAllStudents() {
    return this.#students;
  }

}

const university = new University('University');
university.addStudend(students);

console.log(university);

console.log('List of students admitted to the university:\n');
for (let student of university.getAllStudents()) {
  console.log(`    ${student.name} ${student.surname}`);
}

console.log('List of students who entered the university on a budget:\n');
for (let student of university.getBestStudent()) {
  console.log(`    ${student.name} ${student.surname}`);
}

console.log('Array of the best students:\n');
console.log(university.getBestStudent());
