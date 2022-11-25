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
