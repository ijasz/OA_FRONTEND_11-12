console.log("spread operator");

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6];
const arr3 = [...arr1, ...arr2];
const arr4 = [0, ...arr3, 7];
// const arr3 = arr1.concat(arr2);

// for (const i of arr1) {
//   arr3.push(i);
// }

// for (const i of arr2) {
//   arr3.push(i);
// }

// arr1[0] = 0;

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4[7]);
// console.log(arr4);

const loc = {
  area: "vengata nagar",
  pincode: 605001,
};

const person = {
  firstname: "ocean",
  lastname: "academy",
  age: 10,
  area: "vengata nagar",
  pincode: 605001,
};

console.log(person);
