/* Задача 4. Функції (файл task-4.ts)
Функція printUserInfo виводить інформацію про користувача, включаючи ім’я, вік і (опціонально) email.
Завдання:

Додай явну типізацію до параметрів функції: name, age та email.
Зроби параметр email опціональним – щоб функція могла працювати як з ним, так і без нього.
Типізуй повернення функції, зауваж що вона нічого явно не повертає.
Залиш реалізацію функції без змін.*/


function printUserInfo (name: string, age: number, email?: string): void {
  console.log("Name:", name);
  console.log("Age:", age);
  if (email) {
    console.log("Email:", email);
  }
}

printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");


/*

//Легше додавати нові поля в майбутньому
interface User {
  name: string;
  age: number;
  email?: string; // опціональнo
}

// i Функція приймає один об’єкт User
function printUserInfo(user: User): void {
  console.log("Name:", user.name);
  console.log("Age:", user.age);
  if (user.email) {
    console.log("Email:", user.email);
  }
}
printUserInfo({ name: "Alice", age: 30 });
printUserInfo({ name: "Bob", age: 25, email: "bob@mail.com" });
*/