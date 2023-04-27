const date = new Date();

// console.log(typeof date);
// console.log(date.getDay());

switch (date.getDay()) {
  case 0:
    document.write("sunday");
    break;
  case 1:
    document.write("monday");
    break;
  case 2:
    document.write("tuesday");
    break;
  case 3:
    document.write("wednesday");
    break;
  case 4:
    document.write("thursday");
    break;
  case 5:
    document.write("friday");
    break;
  case 6:
    document.write("saturday");
    break;
  default:
    document.write("invalid");
    break;
}
