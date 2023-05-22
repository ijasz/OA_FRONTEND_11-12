const doc = document;

const openSidebar = () => {
  const sidebar = doc.querySelector(".sidebar");
  sidebar.classList.remove("inactive");
};

const closeSidebar = () => {
  const sidebar = doc.querySelector(".sidebar");
  sidebar.classList.add("inactive");
};

console.log("start");

setInterval(() => {
  console.log("hello");
}, 5000);

console.log("end");
