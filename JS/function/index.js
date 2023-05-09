// function statement / function declaration

// function greeting() {
//   console.log("hello");
// }

// console.log("start");

// greeting();

// console.log("end");

const doc = document;
// let isAddOnce = true;

// function triggred() {
//   const h1 = doc.querySelector("h1");
//   //   console.log(doc.head);
//   //   console.log(doc.body);
//   if (isAddOnce) h1.textContent = h1.textContent + " " + "Ocean☻";
//   isAddOnce = false;
// }

let c = 0;

function triggred() {
  const h1 = doc.querySelector("h1");
  c++;
  switch (c) {
    case 1:
      h1.textContent = "myself dhoni";
      break;

    case 2:
      h1.textContent = "captain of indian team";
      break;

    case 3:
      h1.textContent = "am good as wicket keeper";
      break;

    case 4:
      h1.textContent = "ambassador of golf";
      break;

    case 5:
      h1.textContent = "am automobile lover♥";
      break;

    case 6:
      h1.textContent = "bye☻";
      c = 0;
      break;
  }
}
