// // #### updatedStudents

// 1. add role:'student' property to each object
//    using MAP method
// 2. assign to 'updatedStudents' variable and log

const updatedStudents = students.map(function (student) {
  student.role = 'student';
  return student;
});

console.log(updatedStudents);

// #### highScores

// 1. filter array and return only scores >= 80
// 2. assign to 'highScores' variable and log

const highScores = students.filter(function (student) {
  return student.score >= 80;
});

console.log(highScores);

// #### specificId

// 1. find specific id in array
// 2. assign to 'specificId' variable and log

const specificId = students.find(function (student) {
  return student.id === 3;
});

console.log(specificId);

// #### averageScore

// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to 'averageScore' and log

const averageScore = students.reduce(function (total, student) {
  return (total += student.score / students.length);
}, 0);

console.log(averageScore);

// #### survey

// 1. list favorite subjects with reduce
//    {
//    english: 1
//    history: 1
//    math: 3
//    }
// 2. assign to survey and log

const survey = students.reduce(function (survey, student) {
  //   console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});

console.log(survey);
