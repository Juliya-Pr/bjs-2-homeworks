function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  student1.subjectName = 'Algebra';
  this.subjectName = 'Geometry';
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    student1.mark = 5;
    this.mark = 2;
  } else {
    push.student1.mark = 4;
    push.this.mark = 3;
  }
}

Student.prototype.addMarks = function (mark1, mark2, mark3, ...rest) {
  student1.mark = [5, 4, 5];
  this.mark = [2, 3, 2];

}

Student.prototype.getAverage = function () {

}

Student.prototype.exclude = function (reason) {

}
