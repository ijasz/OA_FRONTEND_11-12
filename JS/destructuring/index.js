// Destructuring

const address = {
  area: "vengakata nagar",
  loc: "pondy",
};

const user = {
  organizationName: "ocean",
  age: 10,
  courses: ["HTML", "CSS", "JS"],
  ...address,
};

// console.log(user.organizationName);
// console.log(user.courses);
// console.log(user["organizationName"]);
// console.log(user["courses"]);

// const { organizationName, courses, ...restOfThings } = user;

// console.log(organizationName);
// console.log(courses);
// console.log(restOfThings);

// const arr1 = [6, 7, 8];
// const arr2 = [1, 2, 3, 4, 5, ...arr1];

// const [a, b, c, monica, ...restOfArray] = arr2;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(monica);
// console.log(restOfArray);
