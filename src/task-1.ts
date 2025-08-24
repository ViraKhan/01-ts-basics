/*Задача 1. Типізація скалярних значень (файл task-1.ts)
Завдання:
Додай до кожної змінної явну типізацію.
Переконайся, що TypeScript правильно визначає тип, і не видає помилку.
Залиш назви змінних і їх значення без змін.

type Person = {
  name: string;
  age: number;
  isOnline: boolean;
};*/

const name: string = "Alice";
const age: number = 30;
const isOnline: boolean = true;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Online: ${isOnline}`);
