"use strict";

//Task 1

// function calculate(a, b, c) {
//     if (c !== 0) {
//         return (a - b) / c;
//     }
//     else {
//         console.log("Деление на ноль невозможно");
//         return undefined;
//     }
// }

// let result = calculate(10, 5, 2);
// console.log("Результат =", result);

//Task 2

// function calc(num) {
//     if (typeof num === 'number') 
//     {
//         const square = num ** 2;
//         const cube = num ** 3;
//         return {num, square, cube };
//     }
//     else {
//         console.log("error");
//         return undefined;
//     }
// }

// let result = calc(5);

// if (result !== undefined) 
// {
//     console.log(`Число: ${result.num}`);
//     console.log(`Квадрат числа: ${result.square}`);
//     console.log(`Куб числа: ${result.cube}`);
// }

//Task 3

// const min = (a, b) => (a < b ? a : b);
// const max = (a, b) => (a > b ? a : b);

// let n1 = 5;
// let n2 = 15;

// console.log(`Минимум: ${min(n1, n2)}`);
// console.log(`Максимум: ${max(n1, n2)}`);


//Task 4

// function arr() 
// {
//     let start = parseInt(prompt("начальное значение диапазона:"));
//     let end = parseInt(prompt("конечное значение диапазона:"));

//     if (isNaN(start) || isNaN(end))
//     {
//         console.log("Ошибка: Введите числовые значения.");
//         return [];
//     }

//     if (start > end) 
//     {
//         console.log("Ошибка: Начальное значение должно быть меньше конечного.");
//         return [];
//     }

//     let array = [];
//     for (let i = start; i <= end; i++) 
//     {
//         array.push(i);
//     }

//     return array;
// }

// function print(mas) {
//     if (mas.length === 0) 
//     {
//         console.log("Массив пуст.");
//     } 
//     else 
//     {
//         console.log("Массив:", mas);
//     }
// }

// let result = arr();
// print(result);

//Task 5

// function isEven(num)
// {
//     return num % 2 === 0;
// }

// let n1 = 8;
// let n2 = 2;

// console.log(`${n1} четное? ${isEven(n1)}`); 
// console.log(`${n2} четное? ${isEven(n2)}`);

//Task 6

// function filter(arr) 
// {
//     let even = [];

//     for (let i = 0; i < arr.length; i++) 
//     {
//         if (isEven(arr[i])) 
//         {
//             even.push(arr[i]);
//         }
//     }

//     return even;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenNumbers = filter(numbers);

// console.log("Исходный массив:", numbers);
// console.log("Массив четных чисел:", evenNumbers);

//Task 7

// let symbol = prompt('введите символ/число из которого создается пирамида');
// function pyramid(size)
// {
//   for(let i = 1; i <= size; i++)
//   {
//     let k = '';
//     for(let j = 0; j < i; j++)
//     {
//       k+= symbol == undefined || symbol.length-1 || symbol == ' ' ? i : symbol;
//     };
//     console.log(k+'\n');
//   }
// }
// pyramid(prompt('введите количество рядов'));

//Task 8

// function triangle(rows, isReverse) 
// {
//     let index = [];
//     let i = 0;
//     while (i < rows) 
//     {
//         index[i] = i;
//         i++;
//     }

//     if (isReverse) 
//     {
//         let start = 0;
//         let end = rows - 1;
//         while (start < end) 
//         {
//             let temp = index[start];
//             index[start] = index[end];
//             index[end] = temp;
//             start++;
//             end--;
//         }
//     }

//     i = 0;
//     while (i < rows) 
//     {
//         let space = '';
//         let j = 0;
//         while (j < rows - 1 - index[i]) 
//         {
//             space += ' ';
//             j++;
//         }

//         let stars = '';
//         j = 0;
//         while (j < 1 + index[i] * 2) 
//         {
//             stars += '*';
//             j++;
//         }

//         console.log(space + stars + space);
//         i++;
//     }
// }

// const n = +prompt('Введите число строк:');
// triangle(n);

// if (confirm('Вывести перевёрнутый?')) 
// {
//     triangle(n, true);
// }


//Task 9
// function Fibonacci() 
// {
//     let arr = [0, 1];
//     let next = 1;

//     while (next <= 1000) 
//     {
//         arr.push(next);
//         next = arr[arr.length - 1] + arr[arr.length - 2];
//     }
//     return arr;
// }

// let num = Fibonacci();
// console.log(num);

//Task 10

// function recursive(number) 
// {
//     function summa(num) 
//     {
//         let sum = 0;
//         while (num > 0) 
//         {
//             sum += num % 10;
//             num = Math.floor(num / 10);
//         }
//         return sum;
//     }

//     let current = summa(number);

//     if (current > 9) 
//     {
//         return recursive(current);
//     }

//     return current;
// }

// const input = 9875;
// const result = recursive(input);

// console.log(`Исходное число: ${input}`);
// console.log(`Однозначная сумма: ${result}`);


//Task 11

// function print(arr, index) 
// {
//     if (index >= arr.length) 
//     {
//         return;
//     }

//     console.log(arr[index]);

//     print(arr, index + 1);
// }

// let array = [4, 6, 1, 3, 2];
// print(array, 0);

//Task 12

function info(length) 
{
    let border = "";
    for (let i = 0; i < length; i++) 
    {
        border += "*";
    }
    console.log(border);
}

let stroka = [];
stroka.push("Домашняя работа \"Функции\"");

let group = prompt("Введите номер группы");
stroka.push("Выполнил студент гр." + group);

let sur = prompt("Введите фамилию");
let nam = prompt("Введите имя");
let otchestvo = prompt("Введите отчество");
let fio = sur + ' ' + nam + ' ' + otchestvo;
stroka.push(fio);

let leng = 0;
for (let i = 0; i < stroka.length; i++) 
{
    if (leng < stroka[i].length) 
    {
        leng = stroka[i].length;
    }
}

leng += 2;

info(leng);
for (let i = 0; i < stroka.length; i++) 
{
    let result = "*";
    for (let j = 0; j < leng; j++) 
    {
        if (stroka[i][j] === undefined) 
        {
            if (j === leng - 2) 
            {
                result += '*';
            }
            else {
                result += ' ';
            }
        }
        else 
        {
            result += stroka[i][j];
        }
    }
    console.log(result);
}

info(leng);