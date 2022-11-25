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

function checkMultiplicity(a, b) {
  return a % b === 0;
}

console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(25, 4));

// 3 ---------------------------------
