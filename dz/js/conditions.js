// 1 ---------------

const operation = prompt("Введить число дня тижня від 1 до 7");
const mondey = "Понеділок";
const tuesday = "Вівторок";
const wednesday = "Середа";
const thursday = "Четверг";
const friday = "П'ятниця";
const saturday = "Субота";
const sunday = "Неділя";

switch (operation) {
  case "1":
    console.log(mondey);
    break;
  case "2":
    console.log(tuesday);
    break;
  case "3":
    console.log(wednesday);
    break;
  case "4":
    console.log(thursday);
    break;
  case "5":
    console.log(friday);
    break;
  case "6":
    console.log(saturday);
    break;
  case "7":
    console.log(sunday);
    break;

  default:
    console.log("Введіть коректне число");
}

// 2 ------------
const day = Number(prompt("Введіть число місяця від 1 до 30"));
switch (true) {
  case day > 0 && day < 11:
    console.log("Перша декада");
    break;
  case day > 10 && day < 21:
    console.log("Друга декада");
    break;
  case day > 20 && day < 31:
    console.log("Третя декада");
    break;
  default:
    console.log("Введіть коректне число");
}
