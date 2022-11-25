// 0 ----------------------------

// Реалізувати функцію isWorkingAgePerson, яка буде перевіряти, чи працездатного людина віку (від 16 до 65). Функція приймає в якості параметра вік людини і повертає значення булевського типу.
// Очікуваний результат:
// isWorkingAgePerson(20); // true
// isWorkingAgePerson(4); // false
// isWorkingAgePerson(88); // false

function isWorkingAgePerson(age) {
  let x = age >= 16 && age <= 65;
  return x;
}

console.log(isWorkingAgePerson(50));
console.log(isWorkingAgePerson(4));
console.log(isWorkingAgePerson(88));
console.log(isWorkingAgePerson(20));

// 1 ------------------------------

//Реалізувати функцію, яка приймає число і повертає булевське значення,
//чи воно просте (просте число ділитися без залишку тільки на себе і на одиницю)

function isNumber(number) {
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(isNumber(7));
console.log(isNumber(3));

// 2 ------------------------------

// Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє,
// чи ділиться перше на друге націло (без залишку):

function checkMultiplicity(y, z) {
  return y % z === 0;
}

console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(25, 4));

// 3 ---------------------------------

// Перевірка можливості існування трикутника.
// Реалізувати функцію, яка приймає довжини трикутника;
// функція повертає true, якщо треугольник можливий, і false, якщо ні
// ( a + b> c, a + c> b, b + c> a, (a> 0, b> 0, c> 0)).

function triangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b && a > 0 && b > 0 && c > 0;
}
console.log(triangle(2, 3, 4));
console.log(triangle(2, 0, 4));
console.log(triangle(-2, 3, 4));

// 4 -------------------------------

//Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла):
// трикутника, прямокутника (або конуса, паралелепіпеда)
// в залежності від переданих розмірів фігури.
// Функція повинна повернути обчислене значення.
// Мінімум для однієї фігури на вибір.

/**
 *
 * @param {number} a1 - довжина сторони трикутника
 * @param {number} h - довжина проведеної до цієї сторони висоти
 * @returns {number} - площа трикутника
 */
const sTriangle = function (a1, h) {
  return 0.5 * a1 * h;
};
console.log("S трикутника => ", sTriangle(3, 4));

/**
 *
 * @param {number} a2 - довжина сторони прямокутника
 * @param {number} b2 - суміжна довжина сторони прямокутника
 * @returns {number} - площа прямокутника
 */
const sRectangle = function (a2, b2) {
  return a2 * b2;
};
console.log("S трикутника => ", sRectangle(3, 4));
