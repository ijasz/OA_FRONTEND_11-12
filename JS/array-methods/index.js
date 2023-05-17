const arr = [2, 4, 6];

// function callbackFunc(element, index, array) {
//   console.log(array, "array");
//   console.log(element, "element");
//   console.log(index, "index");
//   console.log("");
// }

// arr.map(callbackFunc);

// const double = arr.map((element) => element ** 2);
// const triple = arr.map((element) => element ** 3);

// console.log(double);
// console.log(triple);

// function myMap(arr, cbf) {
//   const output = [];
//   for (let i = 0; i < arr.length; i++) {
//     let returnValue = cbf(arr[i], i, arr);
//     output.push(returnValue);
//   }

//   return output;
// }

Array.prototype.myMap = function (cbf) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    let returnValue = cbf(this[i], i, this);
    output.push(returnValue);
  }

  return output;
};

const double1 = arr.myMap((value) => value ** 2);
const double2 = arr.map((value) => value ** 2);
console.log(double1);
console.log(double2);

// if (!Array.prototype.map) {
//   Array.prototype.map = function (cbf) {
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//       let returnValue = cbf(this[i], i, this);
//       output.push(returnValue);
//     }

//     return output;
//   };
// }

// const double = myMap(arr, (element) => element ** 2);
// function callbackFunc(element, index, array) {
//   console.log(element, "element");
//   console.log(index, "index");
//   console.log(array, "array");
//   console.log("");
// }

// myMap(arr, (element, index, array) => {
//   console.log(element, "element");
//   console.log(index, "index");
//   console.log(array, "array");
//   console.log("");
// });

// const double = arr.map((element) => element ** 2);

// console.log(double);

// const obj = {
//   firstname: "ocean",
//   lastname: "academy",
//   getFullname: () => {
//     return this;
//   },
// };

// obj.getFullname();

// const simple = function () {
//   return this;
// };

// console.log(simple());
