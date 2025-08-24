/* Задача 6. Узагальнені типи (файл task-6.ts)
Функція getFirstElement приймає масив і повертає його перший елемент.
Завдання:

Зроби функцію узагальненою, використовуючи тип T, щоб вона працювала з масивами будь-якого типу.
Додай явну типізацію дженериків у виклики функцій.
Переконайся, що тип елемента, який повертається, точно відповідає типу елементів у масиві.
Перевір, що TypeScript не дозволяє передати масив змішаних типів без відповідного типу.*/


function getFirstElement<T>(arr:  T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);           // 1
const firstString = getFirstElement<string>(["a", "b", "c"]);     // "a"
const firstBoolean = getFirstElement<boolean>([true, false, true]); // true



console.log(firstNumber); 
console.log(firstString);  
console.log(firstBoolean); 
