console.log("DOM");

// console.log(document.head);
// console.log(document.body);

//// Who to access element through DOM ?
//// Using Some DOM methods

////accessing element for only class name
////accessing element => returns HTML Collection like array
// console.log(document.getElementsByClassName("title"));

////accessing element for only tag name
//// accessing element => returns HTML Collection like array
// console.log(document.getElementsByTagName("h1"));

////accessing element for only id name
////accessing element => returns single unique element like queryselector method but only access id
// console.log(document.getElementById("subtitle"));

////accessing one any element or classname or tagname or css selector
// console.log(document.body.querySelector("h1"));
// console.log(document.body.querySelector(".title"));
// console.log(document.body.querySelector("#subtitle"));
// console.log(document.body.querySelector("body > h1.title"));

////accessing one all element => returns NodeList like array
// console.log(document.body.querySelectorAll("h1"));

// How to Style element through DOM access ?

const doc = document;

const h1 = doc.querySelector("body > h1#subtitle");

// h1.style.color = "red";
// h1.style.backgroundColor = "black";
// h1.style.padding = "20px";

// to reduce js code and best practice
h1.className = "para";
