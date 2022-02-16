const characters = ['Bill', 'Bob', 'Jack'];
const element = document.querySelector('.names');
element.textContent += `${characters}`;
characters[1] = 'Classified';
element.textContent += ` ${characters}`;



for (let i = 0; i < characters.length; i++) {
    element.textContent += ` ${i+1} ${characters[i]} `;
}

for (let i = characters.length - 1; i >= 0; i--) {
    element.textContent += ` ${i+1} ${characters[i]}`;
}

let arrM = ['Новая надежда', 'Империя наносит ответный удар', 'Возвращение джедая'];
const element1 = document.querySelector('.movie');

for (let i = 0; i < arrM.length; i++) {
    console.log(`Эпизод ${i+4}: ${arrM[i]}`);
    element1.textContent += `Эпизод ${i+4}: ${arrM[i]}; `
}

let array1 = [1, 2, 3, 4, 5];
//методы перебора массива
for (let item of array1) {
    console.log(item);
}
// по ключу
for (let key in array1) {
    console.log(array1[key]);
}
//Найти минимальное значение в массиве
let miniNum = document.querySelector('.minimum');
//let arr = prompt('Введите пять чисел через запятую');
//let numbers = arr.split(',');
let numbers = [23, 12, 7, 41, 67];
miniNum.textContent += `Массив чисел: ${numbers} `
console.log(numbers);
//1й способ
let mini = Infinity;
for (let item of numbers) {
    mini = (mini < item) ? mini : item;
}
//2й способ
const findMin = (arr) => {
    let mini = +arr[0];
    for (let i=0; arr.length-1; i++) {
        if (isNaN(+arr[i])) return console.error('Wrong data!');
        if (+arr[i]< mini) mini = arr[i];
    }
    return mini ? mini : 'Was not find';
}
findMin(numbers);
//3й способ
mini = Math.min(...numbers);
//4й способ
mini = numbers.reduce((min, current) => {
    min = (min === undefined || current<min)? current : min
    return min;
});

miniNum.textContent += `Минимальное число: ${mini} `
console.log(mini);
