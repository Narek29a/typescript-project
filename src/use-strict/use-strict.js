var Student = {

    college: "abc",

};

var stud1 = Object.create(Student);


delete stud1.__proto__.college;

console.log(stud1.college);
