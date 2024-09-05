var Student = {

    college: "abc",

};

var stud1 = Object.create(Student);
console.log(stud1)

//delete stud1.__proto__.college;

delete stud1.college;

console.log(stud1.college);
