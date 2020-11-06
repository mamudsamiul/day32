const args=process.argv.slice(2);
let input=args[0];

switch (input.length) {
    case 1:
      console.log("Unit");
      break;
    case 2:
      console.log("Ten");
      break;
    case 3:
      console.log("Hundred");
      break;
    case 4:
      console.log("Thousand");
      break;
    default:
      console.log("more than thousand");
  }