const doc = document;
const cursor = doc.querySelector(".cursor");

doc.body.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  console.log(`X - ${e.clientX}`, `Y - ${e.clientY}`);
});

// doc.body.addEventListener("click", (e) => {
//   cursor.style.borderWidth = "3px";
// });

// function increament() {
//   const h1 = doc.querySelector("h1");
//   h1.textContent = Number(h1.textContent) + 1;
// }
