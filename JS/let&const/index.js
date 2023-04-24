let a = "global scope";
const b = "const value can't able to change again";

{
  let a = "local scope";
  const b = "block const value can't able to change again";
  console.log(a);
  console.log(b);
}

console.log(a);
console.log(b);

// console.log(window.a);
