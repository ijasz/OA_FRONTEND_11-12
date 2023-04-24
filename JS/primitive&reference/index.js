// Primitive types shares only values not reference

// There are 7 primitive data types:
// string
// number
// bigint
// boolean
// undefined
// symbol
// null

// let a = 233; //M4534
// let b = a; //M443576
// let c = b; //M657568
// let d = c; //M657568

// c = "hi";

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Reference Type

// const arr = [1, 2, 3]; //M435

// const a = arr; //M435
// const b = a; //M435
// const c = b; //M435

// c[0] = 0;

// console.log(arr);
// console.log(a);
// console.log(b);
// console.log(c);

// const obj = {
//   name: "ocean",
//   age: 10,
// };

// const a = {
//   name: obj.name,
//   age: obj.age,
// };
// const b = obj;
// const c = obj;

// a.age = b.age + 1;

// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj);
// console.log(a);
// console.log(b);
// console.log(c);

const n = "ocean";

console.log(n.at(-1));
console.log(n[2]);
console.log(n[n.length - 1]);

console.log("myself" + " " + n);
console.log(`myself ${n}`);
console.log("myself".concat(" ", n));
