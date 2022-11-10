const firstName = "Text";
const lastName = "Testovich";
const email = "test@imail.com";

const obj = {}; // синтаксичний цукор
const obj2 = Object();
const obj3 = new Object();

// властивості: рядки, Symbol()
const user = {
  // key:value,
  firstName: "Test",
  lastName: "Testovich",
  email: "test@imail.com",
  password: "qwert",
};

console.log("user :>> ", user);
// alert(user); // Не віє виводити об'єкти

// доступ до властивостей
// Долавання властивостей
user.age = 10;
console.log("user :>> ", user);

// Читання властивостей
console.log("user :>> ", user.email);

// Видалення властивостей
delete user.password;
console.log("user :>> ", user);

// Створити об'єкт машини (марка, модель, год, номер, цвет)
// Просмотреть об'єкт
// Изменить колір
// удалити св-во год випуска
// Добавити св-во ім'я/призвище влсника
// продивитися об'єкт

const car = {
  mark: "Mersedes",
  model: "Brabus",
  year: 2022, // без лапок це цифри
  number: "007",
  color: "white",
};
console.log("car :>> ", car);

// Зміна значення властивості
car.color = "black";
console.log("car :>> ", car);

delete car.year;
console.log("car :>> ", car);

car.name = "Bogdan";
car.surname = "Hmelnickiy";
console.log("car :>> ", car);
